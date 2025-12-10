import { render, screen } from '@testing-library/vue'
import LoginForm from '@auth/components/LoginForm.vue'
import userEvent from '@testing-library/user-event'

describe('LoginForm', () => {
  it('emits submit with the correct email and password', async () => {
    const { emitted } = render(LoginForm)
    const emailInput = screen.getByPlaceholderText(/@/i)
    const passwordInput = screen.getByPlaceholderText(/•/i)
    const submitButton = screen.getByRole('button', { name: /entrar/i })

    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, '123456')
    await userEvent.click(submitButton)

    const submitEvents = emitted().submit as unknown[][]

    expect(submitEvents).toHaveLength(1)
    expect(submitEvents[0][0]).toEqual({
      email: 'test@example.com',
      password: '123456',
    })
  })
})
