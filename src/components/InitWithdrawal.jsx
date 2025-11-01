import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { initWithdrawal } from '../server'
import RedirectIframe from './RedirectIframe'

const InitWithdrawal = ({ query_params, theme = 'light' }) => {
  const { t } = useTranslation()
  const [redirect_url, setRedirectUrl] = useState(null)
  const [is_loading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countdown, setCountdown] = useState(10)
  const [is_redirecting, setIsRedirecting] = useState(false)
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
          return_url: query_params.return_url,
          client_id: query_params.client_id,
          locale: query_params.locale
        })

        if (result.redirectUrl) {
          setRedirectUrl(result.redirectUrl)
        } else {
          setError(t('withdrawal.noRedirect'))
        }
      } catch (error) {
        console.error('Error initiating withdrawal:', error)
        setError(t('withdrawal.errorWithMessage', { message: error.message }))
        hasInitiated.current = false
        setIsRedirecting(true)
        setCountdown(10)
      } finally {
        setIsLoading(false)
      }
    }

    init_withdrawal_process()
  }, [query_params.session_id, query_params.return_url, query_params.client_id, query_params.locale, t])

  useEffect(() => {
    if (is_redirecting && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (is_redirecting && countdown === 0) {
      if (query_params.return_url) {
        window.location.href = query_params.return_url
      }
    }
  }, [is_redirecting, countdown, query_params.return_url])

  if (redirect_url) {
    return <RedirectIframe redirect_url={redirect_url} theme={theme} />
  }

  const is_dark = theme === 'dark'
  const cx = (...classes) => classes.filter(Boolean).join(' ')

  const container_classes = cx(
    'flex min-h-screen w-full flex-col items-center justify-center gap-5 px-5 text-center',
    is_dark ? 'bg-[#16161f] text-slate-100' : 'bg-[#f3f6f9] text-slate-900'
  )

  const status_text_classes = cx(
    'text-sm font-medium md:text-base',
    is_dark ? 'text-slate-200' : 'text-slate-700'
  )

  return (
    <div className={container_classes}>
      {is_loading && (
        <div>
          <p className="text-base font-semibold md:text-lg">{t('withdrawal.initializing')}</p>
        </div>
      )}
      {error && (
        <div className="space-y-4">
          <p className="text-base font-semibold text-red-400 md:text-lg">{error}</p>
          {is_redirecting && (
            <p className={status_text_classes}>
              {t('common.redirectingInSeconds', { count: countdown })}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default InitWithdrawal
