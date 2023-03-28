// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  const user = userEvent.setup()
  const handleSubmit = jest.fn()
  
  const {username, password} = buildLoginForm()
  
  render(<Login onSubmit={handleSubmit} />)

  await user.type(screen.getByLabelText(/user/i), username)
  await user.type(screen.getByLabelText(/pass/i), password)
  await user.click(screen.getByRole('button', {name: /submit/i}))
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username,
    password: password
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  }
})

/*
eslint
  no-unused-vars: "off",
*/
