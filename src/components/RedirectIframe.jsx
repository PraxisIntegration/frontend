import { useTranslation } from 'react-i18next'

const RedirectIframe = ({ redirect_url, theme = 'light' }) => {
  const { t } = useTranslation()

  const container_classes = theme === 'dark'
    ? 'flex min-h-screen w-full items-center justify-center bg-[#1f1f2a] text-white'
    : 'flex min-h-screen w-full items-center justify-center bg-white text-slate-900'

  return (
    <div className={container_classes}>
      <iframe
        src={redirect_url}
        className="h-full w-full border-0"
        title={t('common.paymentRedirect')}
      />
    </div>
  )
}

export default RedirectIframe
