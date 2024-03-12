import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export type LocaleType = 'ko' | 'en'

export const locales: LocaleType[] = ['ko', 'en'] as const
export const localePrefix = 'always' //'as-needed' // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })