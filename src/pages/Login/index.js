import React, { useState } from "react";
import { Auth } from "aws-amplify";

import { useAppContext } from '../../contexts/LoginContext';
import { Container, FormBox } from './styles';

import Navbar from '../../components/Navbar';

export default function Login() {
    const { userHasAuthenticated } = useAppContext();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await Auth.signIn(email, password);
            alert("Logged in");
            userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
        }

    }

    const { email, password } = values;

    return (
        <Container>
            <Navbar />

            <FormBox>
                <form onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={handleChange('email')}
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={handleChange('password')}
                    />
                    <button type="submit">Login</button>
                </form>
            </FormBox>
        </Container>
    );
}