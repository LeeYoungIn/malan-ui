export {}

declare global {
  type LocaleParams = { params: Promise<{ locale: string }> }
}