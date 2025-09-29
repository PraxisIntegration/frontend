import { useState, useEffect } from 'react'
import i18n from './i18n'
import { normalizeLocale, isRTL } from './locale'
import InitDepostiForm from './components/InitDepostiForm'
import InitWithdrawal from './components/InitWithdrawal'
import './App.css'

function App() {
  const [query_params, setQueryParams] = useState({
    session_id: '',
    intent: '',
    return_url: '',
    client_id: '',
    locale: 'en-GB'
  })
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    
    const theme_param = urlParams.get('theme') || 'light'
    setTheme(theme_param === 'dark' ? 'dark' : 'light')

    const rawLocale = urlParams.get('locale') || ''
    const normalized = normalizeLocale(rawLocale, 'en-GB')
    i18n.changeLanguage(normalized)
    document.documentElement.setAttribute('dir', isRTL(normalized) ? 'rtl' : 'ltr')


    setQueryParams({
      session_id: urlParams.get('session_id') || '',
      intent: urlParams.get('intent') || '',
      return_url: urlParams.get('return_url') || '',
      client_id: urlParams.get('client_id') || '',
      locale: normalized
    })
  }, [])

  const render_component = () => {
    if (query_params.intent === 'withdrawal') {
      return <InitWithdrawal query_params={query_params} theme={theme} />
    } else {
      return <InitDepostiForm query_params={query_params} theme={theme} />
    }
  }

  return (
    <div className={`app ${theme}-theme`}>
      {render_component()}
    </div>
  )
}

export default App
