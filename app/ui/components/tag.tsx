'use client'
import clsx from 'clsx'
import { forwardRef, useCallback, useEffect, useRef } from 'react'
import Tagify from '@yaireo/tagify'

import { InputProps } from '@ui/components/input'

interface InputTagProps extends InputProps {
  whitelist?: string[]
}

export const InputTag = forwardRef<HTMLInputElement, InputTagProps>(({ whitelist = [], className, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRef = useCallback((e: any) => {
    // @ts-ignore
    inputRef.current = e
    // @ts-ignore
    ref && ref(e)
  }, [ref])

  useEffect(() => {
    if (inputRef && inputRef.current) {
      // @ts-ignore
      const tag: Tagify | null = inputRef.current.__tagify
      if (!tag)
        new Tagify(inputRef.current, {
          whitelist,
          originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(','),
          dropdown: { enabled: 0, closeOnSelect: false, classname: 'tagify__inline__suggestions' }
        })
      else
        tag.loadOriginalValues(inputRef.current.value)
    }
  }, [props, whitelist])

  return <input
    ref={handleRef}
    className={clsx('input-default input-tag', className)} {...props} />
})

export const ButtonTag = forwardRef<HTMLInputElement, InputTagProps>(function Tag({ whitelist = [], className, ...props }, ref) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRef = useCallback((e: any) => {
    // @ts-ignore
    inputRef.current = e
    // @ts-ignore
    ref && ref(e)
  }, [ref])

  useEffect(() => {
    if (inputRef && inputRef.current) {
      // @ts-ignore
      const tag: Tagify | null = inputRef.current.__tagify
      if (!tag)
        new Tagify(inputRef.current, {
          editTags: {
            keepInvalid: false // better to auto-remove invalid tags which are in edit-mode (on blur)
          },
          // email address validation (https://stackoverflow.com/a/46181/104380)
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          whitelist,
          dropdown: {
            position: 'text',
            enabled: 1 // show suggestions dropdown after 1 typed character
          }
        })
      else
        tag.loadOriginalValues(inputRef.current.value)
    }
  }, [props, whitelist])

  return <div>
    <input
      ref={handleRef}
      className={clsx('input', className)} {...props} />
    <button type="button">+</button>
  </div>
})