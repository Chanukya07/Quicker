import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home page', () => {
  it('renders the product value and working navigation', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1, name: /your spending/i })).toBeInTheDocument()
    expect(screen.getByText('Every receipt, organized')).toBeInTheDocument()
    expect(screen.getByText('Clarity at a glance')).toBeInTheDocument()
    expect(screen.getByText('AI-powered extraction')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Analyze my inbox' })).toHaveAttribute('href', '/analyze')
    expect(screen.getByRole('link', { name: /Preview sample dashboard/ })).toHaveAttribute('href', '/demo')
  })
})
