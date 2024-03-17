'use client'
import get from 'lodash/get'
import set from 'lodash/set'
import React, { useState, useRef, useCallback, useEffect, ReactNode } from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import clsx from 'clsx'

import { Button } from '@ui/components/button'

type DropdownItemType = { name: string, label: string, onClick?(): void }
type DropdownOptionType = DropdownItemType & { subMenu?: DropdownItemType[] }

interface DropdownProps {
  toggler: ReactNode
  buttonText?: string
  options?: DropdownOptionType[]
}

const optionsEx: DropdownOptionType[] = [
  {
    name: 'opt1',
    label: 'Option 1'
  },
  {
    name: 'opt2',
    label: 'Option 2'
  },
  {
    name: 'opt3',
    label: 'Option 3'
  },
  {
    name: 'opt4',
    label: 'Sub Option 4',
    subMenu: [
      {
        name: 'subOpt4',
        label: 'Sub Option 1'
      },
      {
        name: 'subOpt5',
        label: 'Sub Option 2'
      }
    ]
  },
  {
    name: 'opt6',
    label: 'Option 6'
  },
  {
    name: 'opt5',
    label: 'Sub Option 5',
    subMenu: [
      {
        name: 'subOpt5',
        label: 'Sub Option 2'
      }
    ]
  }
]

export function Dropdown({ toggler, options = optionsEx }: DropdownProps) {
  const dropdownListRef = useRef(null)
  const dropdownButtonRef = useRef(null)
  const dropdownItemsRef = useRef<any>(null)

  const [dropdownOpen, setDropdownToggle] = useState(false)
  const [subMenus, setSubMenus] = useState<any>({})

  const toggleSub = useCallback((name: string) => {
    const tempSubMenus = { ...subMenus }
    Object.keys(tempSubMenus).forEach(key => {
      tempSubMenus[key] = key === name ? !tempSubMenus[key] : false
    })
    setSubMenus(tempSubMenus)
  }, [subMenus])

  const setButtonRef = useCallback((node: any, ref: any) => {
    dropdownButtonRef.current = node
    return ref(node)
  }, [])

  const setListRef = useCallback((node: any, ref: any) => {
    dropdownListRef.current = node
    return ref(node)
  }, [])

  const setListItemRef = useCallback((node: any, idx: number) => {
    if (dropdownItemsRef.current)
      set(dropdownItemsRef.current, idx, node)
    else
      dropdownItemsRef.current = { idx: node }
  }, [])

  const dropdownToggle = useCallback(() => {
    setDropdownToggle(p => !p)
  }, [])

  useEffect(() => {
    options.forEach(opt => {
      if (opt.subMenu) {
        const tempSubMenus = subMenus
        tempSubMenus[opt.name] = false
        setSubMenus(tempSubMenus)
      }
    })
  }, [options])

  return <Manager>
    <Reference>
      {({ ref }) => <Button
        ref={node => setButtonRef(node, ref)}
        onClick={dropdownToggle}>
        {toggler}
      </Button>}
    </Reference>
    {dropdownOpen &&
      <Popper
        strategy="fixed"
        placement="bottom-start">
        {({ ref, style, placement }) => <div
          ref={node => setListRef(node, ref)}
          style={style}
          data-placement={placement}
          className={clsx(DROP_CLASS, dropdownOpen && 'open')}>
          {options.map((item, idx) => <div
            key={item.name + idx}
            ref={node => setListItemRef(node, idx)}
            className={clsx(DROP_ITEM_CLASS, item.name && `list-item--${item.name}`, { 'flex items-center justify-between gap-2 after:content-[""]': !!item.subMenu })}
            onClick={() => toggleSub(item.name)}>
            {item.label}
            {item.subMenu && <DropdownSub
              open={subMenus[item.name]}
              options={item.subMenu}
              listRef={dropdownListRef}
              parentRef={get(dropdownItemsRef.current, idx)}/>}
          </div>)}
        </div>}
      </Popper>}
  </Manager>
}

export function DropdownSub({ options, listRef, parentRef, open }: any) {
  return open ? <Popper
    strategy="fixed"
    placement="right-start"
    modifiers={[{
      name: 'offset',
      options: {
        offset: [(parentRef?.offsetTop || 0) + 10, -5]
      }
    }]}
    referenceElement={listRef.current}>
    {({ ref, style, placement }) =>
      <div
        ref={ref}
        style={style}
        data-placement={placement}
        className={DROP_CLASS}>
        {options.map((item: any) => <div
          className={clsx(DROP_ITEM_CLASS, item.name && `list-item-sub--${item.name}`)}
          key={item.name}>
          {item.label}
        </div>)}
      </div>}
  </Popper> : null
}

const DROP_CLASS = 'popper-dropdown'
const DROP_ITEM_CLASS = 'popper-dropdown-item'