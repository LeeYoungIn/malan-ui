'use client'
import clsx from 'clsx'

export interface LoadingProps {
  loading?: boolean
  className?: string
  dotClassName?: string
}

const size = 50

export function Loading({ loading = true, className, dotClassName }: LoadingProps) {
  const ballSize = size / 6, gapSize = size / 10
  return <div className={clsx('loading', className)} style={{ display: loading ? undefined : 'none' }}>
    <div className={dotClassName}></div>
    <div className={dotClassName}></div>
    <div className={dotClassName}></div>
    <div className={dotClassName}></div>
    <style jsx>{`
      .loading {
        position: relative;
        margin: 0 auto;
        width: ${gapSize * 7 + ballSize}px;
        height: ${size}px;
      }

      .loading, .loading div {
        box-sizing: border-box;
      }

      .loading div {
        position: absolute;
        top: ${(size - ballSize) * .5}px;
        width: ${ballSize}px;
        height: ${ballSize}px;
        border-radius: 50%;
        background: currentColor;
        animation-timing-function: cubic-bezier(0, 1, 1, 0)
      }

      .loading div:nth-child(1) {
        left: ${gapSize}px;
        animation: loading1 1s infinite;
      }

      .loading div:nth-child(2) {
        left: ${gapSize}px;
        animation: loading2 1s infinite;
      }

      .loading div:nth-child(3) {
        left: ${gapSize * 4}px;
        animation: loading2 1s infinite;
      }

      .loading div:nth-child(4) {
        left: ${gapSize * 7}px;
        animation: loading3 1s infinite;
      }

      @keyframes loading1 {
        0% {
          transform: scale(0)
        }
        100% {
          transform: scale(1)
        }
      }

      @keyframes loading3 {
        0% {
          transform: scale(1)
        }
        100% {
          transform: scale(0)
        }
      }

      @keyframes loading2 {
        0% {
          transform: translate(0, 0)
        }
        100% {
          transform: translate(${gapSize * 3}px, 0)
        }
      }
    `}</style>
  </div>
}

export function LoadingSpin({ type = 'outline', colorClassName = 'text-4xl', sizeClassName = 'text-4xl' }: { type?: 'solid' | 'outline', colorClassName?: string, sizeClassName?: string }) {
  return <div className="animate-spin">
    <i className={clsx(`ki-${type}`, 'ki-disk', colorClassName, sizeClassName)}></i>
  </div>
}