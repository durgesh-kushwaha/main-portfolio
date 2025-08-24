import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`.trim()}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`card-header ${className}`.trim()}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }: CardProps) {
  return (
    <h3 className={`card-title ${className}`.trim()}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '' }: CardProps) {
  return (
    <p className={`card-description ${className}`.trim()}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`card-content ${className}`.trim()}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`card-footer ${className}`.trim()}>
      {children}
    </div>
  )
}
