import { useState, useEffect } from 'react'
import InitDepostiForm from './components/InitDepostiForm'
import InitWithdrawal from './components/InitWithdrawal'
import './App.css'

function App() {
  const [query_params, setQueryParams] = useState({
    session_id: '',
    intent: '',
    return_url: '',
    client_id: ''
  })
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    
    const theme_param = urlParams.get('theme') || 'light'
    setTheme(theme_param === 'dark' ? 'dark' : 'light')

    setQueryParams({
      session_id: urlParams.get('session_id') || '',
      intent: urlParams.get('intent') || '',
      return_url: urlParams.get('return_url') || '',
      client_id: urlParams.get('client_id') || ''
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