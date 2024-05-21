
import {
    render, waitFor,
  } from '@testing-library/react';

import Login from './page';
import userEvent from '@testing-library/user-event';
import { get } from 'http';

describe('useSignIn', () => {
    it('should render sign in page successfully', () => {
        const {getByTestId} = render(<Login />);
     expect(getByTestId('heading')).toBeInTheDocument();
    });
    it("should make an api call", async()=>{
        const {getByTestId} = render(<Login />);
        const email = getByTestId('email');
        const password = getByTestId('password');
        const submit = getByTestId('submit-button');

        await waitFor(async()=>{
            await userEvent.type(email, "mehak@yopmail.com"),
            await userEvent.type(password, "123456"),
            await userEvent.click(submit);
            const successMessage = getByTestId('message');
            expect(successMessage).toBeInTheDocument();
            expect(successMessage).toHaveTextContent("User logged in successfully.")
        })
    });

    it("should show error in invalid credentails", async()=>{
        const {getByTestId} = render(<Login />);
        const email = getByTestId('email');
        const password = getByTestId('password');
        const submit = getByTestId('submit-button');

        await waitFor(async()=>{
                    await userEvent.type(email, "mn@yopmail.com"),
                    await userEvent.type(password, "123456"),
                    await userEvent.click(submit);
                    const successMessage = getByTestId('message');
                    expect(successMessage).toBeInTheDocument();
                    expect(successMessage).toHaveTextContent("Error in login")
                })

    });
})

