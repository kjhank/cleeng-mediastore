/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CLEENG_ENVIRONMENT: string
  readonly VITE_CLEENG_OFFER_ID: string
  readonly VITE_CLEENG_PUBLISHER_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
