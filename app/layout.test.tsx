import { render, screen } from '@testing-library/react'
import RootLayout, { metadata } from './layout'
import React from 'react'

describe('RootLayout', () => {
  let originalConsoleError: typeof console.error;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = (...args) => {
      // Ignore React 19 hydration warning about html in div for test environment
      if (typeof args[0] === 'string' && args[0].includes('cannot be a child of')) {
        return;
      }
      originalConsoleError(...args);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('should render children and essential elements', () => {
    const layoutOutput = RootLayout({
      children: <div data-testid="test-child">Test Child Content</div>
    });

    // Test that it returns an html element
    expect(layoutOutput.type).toBe('html');
    expect(layoutOutput.props.lang).toBe('en');

    // Get body element from html children
    const body = layoutOutput.props.children;
    expect(body.type).toBe('body');
    expect(body.props.className).toContain('antialiased');

    // Render it normally with React Testing Library just to ensure
    // components can be queried and there are no rendering crashes
    const { getByText } = render(
      <RootLayout>
        <div data-testid="test-child">Test Child Content</div>
      </RootLayout>
    );

    // The skip to main content link should be present
    expect(getByText('Skip to main content')).toBeInTheDocument();

    // The child should be rendered
    const child = getByText('Test Child Content');
    expect(child).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute('href', '/terms');
  });

  it('exports metadata correctly', () => {
    expect(metadata).toEqual({
      title: 'Quicker',
      description: 'Gmail Spend Intelligence dashboard',
    });
  });
});
