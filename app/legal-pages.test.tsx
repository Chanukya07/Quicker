import { render, screen } from '@testing-library/react'
import PrivacyPage, { metadata as privacyMetadata } from './privacy/page'
import TermsPage, { metadata as termsMetadata } from './terms/page'

describe('Legal pages', () => {
  it('renders the privacy policy and links to the terms', () => {
    render(<PrivacyPage />)

    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read Terms of Service' })).toHaveAttribute('href', '/terms')
    expect(privacyMetadata.title).toBe('Privacy Policy | Quicker')
  })

  it('renders the terms and links to the privacy policy', () => {
    render(<TermsPage />)

    expect(screen.getByRole('heading', { level: 1, name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Privacy Policy' })[0]).toHaveAttribute('href', '/privacy')
    expect(termsMetadata.title).toBe('Terms of Service | Quicker')
  })
})
