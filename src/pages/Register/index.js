import React, { useState, useContext } from "react";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";

import { AppContext } from '../../contexts/AppContext';
import { Container, FormBox } from './styles';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';

export default function Login() {
    const history = useHistory();

    const { logIn } = useContext(AppContext);

    const [newUser, setNewUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        confirmCode: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password || !confirmPassword ) {
            toast.info("Preencha todos os campos!");
        } else {
            setLoading(true);

            try {
                const newUser = await Auth.signUp({
                    username: email,
                    password: password,
                });
                setNewUser(newUser);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.error(e);
            }
        }
    }

    async function handleConfirmationSubmit(event) {
        event.preventDefault();

        if ( !confirmCode ) {
            toast.info("Preencha todos os campos!");
        } else {
            setLoading(true);

            try {
                await Auth.confirmSignUp(email, confirmCode);
                await Auth.signIn(email, password);
                logIn();
                setLoading(false);
                history.push("/");
            } catch (e) {
                setLoading(false);
                console.error(e);
            }
        }
    }

    const { email, password, confirmPassword, confirmCode } = values;

    function renderForm() {
        return (
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
                    <label>Confirme sua senha</label>
                    <input
                        type="password"
                        placeholder="Confirme a Senha"
                        onChange={handleChange('confirmPassword')}
                    />

                    <button type="submit">Cadastrar</button>
                </form>
            </FormBox>
        );
    }

    function renderConfirmationForm() {
        return (
            <FormBox>
                <form onSubmit={handleConfirmationSubmit}>
                    <label>Código de confirmação</label>
                    <input
                        type="number"
                        placeholder="Código"
                        onChange={handleChange('confirmCode')}
                    />
                    <text>Por favor, verifique seu e-mail para obter o código.</text>

                    <button type="submit">Verificar</button>
                </form>
            </FormBox>
        );
    }

    return (
        <Container>
            <Navbar />
            {newUser === null ? renderForm() : renderConfirmationForm()}
            {loading && <Loading />}
        </Container>
    );
}