import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home page', () => {
  it('renders the product value and feature overview', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1, name: /your spending/i })).toBeInTheDocument()
    expect(screen.getByText('Every receipt, organized')).toBeInTheDocument()
    expect(screen.getByText('Clarity at a glance')).toBeInTheDocument()
    expect(screen.getByText('Spot what changed')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Open live demo' })).toHaveAttribute('href', '/demo')
  })
})
