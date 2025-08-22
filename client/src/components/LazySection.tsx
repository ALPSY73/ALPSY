import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  delay?: number
  className?: string
}

export default function LazySection({ 
  children, 
  fallback, 
  threshold = 0.1, 
  delay = 0,
  className = '' 
}: LazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold })

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      const timer = setTimeout(() => setIsLoaded(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, isLoaded, delay])

  return (
    <div ref={targetRef} className={className}>
      {isLoaded ? children : fallback}
    </div>
  )
}