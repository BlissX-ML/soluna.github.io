import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import { expect, test } from 'vitest'

test('renders hello text', () => {
    render(<App />)
    expect(screen.getByText(/recap/i)).toBeInTheDocument()
})