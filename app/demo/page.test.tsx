import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DemoPage from './page'

describe('Demo dashboard', () => {
  it('supports searching sample transactions and changing views', async () => {
    const user = userEvent.setup()
    render(<DemoPage />)

    const search = screen.getByRole('textbox', { name: 'Search transactions' })
    await user.type(search, 'groceries')

    expect(screen.getByText('Whole Foods Market')).toBeInTheDocument()
    expect(screen.queryByText('Adobe Creative Cloud')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Insights' }))
    expect(screen.getByRole('heading', { name: 'Insights' })).toBeInTheDocument()
    expect(screen.getByText('You spent 18% less this week')).toBeInTheDocument()
  })
})
