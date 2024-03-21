'use client'
import Flatpickr, { DateTimePickerProps } from 'react-flatpickr'
import clsx from 'clsx'

interface DatepickerProps extends Omit<DateTimePickerProps, 'render'> {

}

export function Datepicker({ type = 'text', className, ...props }: DatepickerProps) {
  return <Flatpickr
    data-enable-time
    render={({ ...props }, ref) => {
      //@ts-ignore
      return <input className="input-default input-datepicker" ref={ref} {...props}/>
    }}
    {...props}/>
}