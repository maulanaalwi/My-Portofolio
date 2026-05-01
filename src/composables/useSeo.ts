import { site } from '@/content/site'

function resolveOgImageUrl(): string {
  const img = site.meta.ogImage
  if (/^https?:\/\//i.test(img)) return img
  if (typeof window !== 'undefined' && window.location?.origin) {
    return new URL(img, `${window.location.origin}/`).href
  }
  const base =
    site.meta.canonicalUrl.endsWith('/') ?
      site.meta.canonicalUrl
    : `${site.meta.canonicalUrl}/`
  return new URL(img, base).href
}

/** Memperbarui meta SEO dasar setelah aplikasi hidup di klien. */
export function applyDocumentSeo(custom?: Partial<{ title: string; description: string }>) {
  document.title = custom?.title ?? site.meta.title
  upsertMeta('description', custom?.description ?? site.meta.description)
  upsertMeta('keywords', [...site.meta.keywords].join(', '))
  upsertOg('og:title', custom?.title ?? site.meta.title)
  upsertOg('og:description', custom?.description ?? site.meta.description)
  upsertOg('og:type', 'website')
  upsertOg('og:url', site.meta.canonicalUrl)
  upsertOg('og:image', resolveOgImageUrl())
  upsertOg('og:locale', site.meta.locale)
}

function upsertMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = name
    document.head.appendChild(tag)
  }
  tag.content = content
}

function upsertOg(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.content = content
}
