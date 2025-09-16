import { useState, useEffect, useRef } from 'react'
import { themes } from '../constants/themes'
import { initWithdrawal } from '../server'
import RedirectIframe from './RedirectIframe'

const InitWithdrawal = ({ query_params, theme = 'light' }) => {
  const [redirect_url, setRedirectUrl] = useState(null)
  const [is_loading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const hasInitiated = useRef(false)

  useEffect(() => {
    if (hasInitiated.current) {
      return
    }

    const init_withdrawal_process = async () => {
      try {
        hasInitiated.current = true
        setIsLoading(true)
        const result = await initWithdrawal({ 
          session_id: query_params.session_id,
          return_url: query_params.return_url
        })
        console.log('Withdrawal initiated successfully:', result)
        
        if (result.redirectUrl) {
          setRedirectUrl(result.redirectUrl)
        } else {
          setError('No redirect URL received')
        }
      } catch (error) {
        console.error('Error initiating withdrawal:', error)
        setError('Error initiating withdrawal. Please try again.')
        hasInitiated.current = false
      } finally {
        setIsLoading(false)
      }
    }

    init_withdrawal_process()
  }, [query_params.session_id, query_params.return_url])

  if (redirect_url) {
    return <RedirectIframe redirect_url={redirect_url} theme={theme} />
  }

  const current_theme = themes[theme]

  return (
    <div 
      className={`withdrawal-container ${theme}-theme`}
      style={{
        backgroundColor: current_theme.formBackground,
        color: current_theme.textColor,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {is_loading && (
        <div style={{ textAlign: 'center' }}>
          <p>Initializing withdrawal...</p>
        </div>
      )}
      {error && (
        <div style={{ textAlign: 'center', color: '#ff6b6b' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default InitWithdrawal
