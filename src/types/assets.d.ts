interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.svg" { const src: string; export default src }
declare module "*.png" { const src: string; export default src }
declare module "*.jpg" { const src: string; export default src }
declare module "*.jpeg" { const src: string; export default src }
declare module "*.webp" { const src: string; export default src }
declare module "*.avif" { const src: string; export default src }
declare module "*.mp4" { const src: string; export default src }
