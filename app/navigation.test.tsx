import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Product navigation', () => {
  it('links to Gmail analysis and the legal documents', () => {
    render(<Home />)

    expect(screen.getByRole('link', { name: 'Analyze my inbox' })).toHaveAttribute('href', '/analyze')
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
  })
})
