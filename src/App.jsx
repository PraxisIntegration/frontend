import { useState, useEffect } from 'react'
import CustomerForm from './components/CustomerForm'
import './App.css'

function App() {
  const [queryParams, setQueryParams] = useState({
    currencyFrom: '',
    currencyTo: '',
    id: '',
    amount: ''
  })
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    
    const themeParam = urlParams.get('theme') || 'light'
    setTheme(themeParam === 'dark' ? 'dark' : 'light')
    
    setQueryParams({
      currencyFrom: urlParams.get('currencyFrom') || '',
      currencyTo: urlParams.get('currencyTo') || '',
      id: urlParams.get('id') || '',
      amount: urlParams.get('amount') || ''
    })
  }, [])

  return (
    <div className={`app ${theme}-theme`}>
      <CustomerForm queryParams={queryParams} theme={theme} />
    </div>
  )
}

export default App