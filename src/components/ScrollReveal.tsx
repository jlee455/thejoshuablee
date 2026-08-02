import { useScrollReveal } from '../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  stagger?: boolean
  className?: string
  delay?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  stagger = false,
  className = '',
  delay
}: ScrollRevealProps) {
  const ref = useScrollReveal()

  const directionClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    fade: 'reveal-fade',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${directionClass} ${stagger ? 'stagger-children' : ''} ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  )
}
