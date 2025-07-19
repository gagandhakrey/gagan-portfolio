import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/organisms/Hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Hero', () => {
  it('renders the name correctly', () => {
    render(<Hero />)
    expect(screen.getByText('Gagan Dhakrey')).toBeInTheDocument()
  })

  it('renders the rotating titles', () => {
    render(<Hero />)
    expect(screen.getByText('Backend Engineer')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/I design & optimize resilient/)).toBeInTheDocument()
  })

  it('renders the download resume button', () => {
    render(<Hero />)
    expect(screen.getByText('Download Résumé')).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    render(<Hero />)
    expect(screen.getByText('Contact / Hire Me')).toBeInTheDocument()
  })
}) 