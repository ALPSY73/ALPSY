import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  priority?: boolean
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  [key: string]: any
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy', 
  priority = false,
  srcSet,
  sizes,
  width,
  height,
  ...props 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  // Load immediately if priority or if intersecting
  const shouldLoad = priority || isIntersecting || loading === 'eager'

  return (
    <div ref={targetRef} className={`relative ${className}`}>
      {hasError ? (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-sm">Image non disponible</span>
        </div>
      ) : (
        <>
          {shouldLoad && (
            <img
              src={src}
              alt={alt}
              srcSet={srcSet}
              sizes={sizes}
              width={width}
              height={height}
              className={`transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${className}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              loading={loading}
              {...props}
            />
          )}
          {!isLoaded && shouldLoad && !hasError && (
            <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`} />
          )}
        </>
      )}
    </div>
  )
}