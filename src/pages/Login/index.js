import React, { useState, useContext } from "react";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";

import { AppContext } from '../../contexts/AppContext';
import { Container, FormBox } from './styles';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Login() {
    const history = useHistory();

    const { logIn } = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            toast.info("Preencha todos os campos!");
        } else {
            setLoading(true);

            try {
                await Auth.signIn(email, password);
                logIn();
                setLoading(false);
                history.push('/');
            } catch (e) {
                setLoading(false);
                console.error(e);
            }
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
                    <button type="submit">Entrar</button>

                    {loading && <Loading />}
                </form>
            </FormBox>
        </Container>
    );
}