import { useTranslation } from 'react-i18next'

const RedirectIframe = ({ redirect_url, theme = 'light' }) => {
  const { t } = useTranslation()

  const base_container_classes = 'flex min-h-screen w-full flex-1 items-stretch'
  const container_classes = theme === 'dark'
    ? `${base_container_classes} bg-[#1f1f2a] text-white`
    : `${base_container_classes} bg-white text-slate-900`

  return (
    <div className={container_classes} style={{ minHeight: '100vh' }}>
      <iframe
        src={redirect_url}
        className="h-full min-h-full w-full flex-1 border-0"
        style={{ minHeight: '100vh' }}
        title={t('common.paymentRedirect')}
      />
    </div>
  )
}

export default RedirectIframe
