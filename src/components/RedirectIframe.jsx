import { themes } from '../constants/themes'
import { useTranslation } from 'react-i18next'

const RedirectIframe = ({ redirect_url, theme = 'light' }) => {
  const { t } = useTranslation()
  const current_theme = themes[theme]
  
  return (
    <div 
      className={`iframe-container ${theme}-theme`}
      style={{
        backgroundColor: current_theme.formBackground,
        color: current_theme.textColor,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <iframe
        src={redirect_url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title={t('common.paymentRedirect')}
      />
    </div>
  )
}

export default RedirectIframe
