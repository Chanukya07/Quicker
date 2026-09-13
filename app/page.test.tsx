import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './page'

describe('Home page', () => {
  it('renders core features', () => {
    render(<Home />)

    expect(screen.getByText('Connect Gmail securely')).toBeInTheDocument()
    expect(screen.getByText('Auto-extract transactions')).toBeInTheDocument()
    expect(screen.getByText('Track trends and anomalies')).toBeInTheDocument()
  })
})
