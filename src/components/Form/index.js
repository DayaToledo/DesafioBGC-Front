import React, { useState, useContext  } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';
import { ToastContainer, toast } from 'react-toastify';

import { Container } from './styles';
import { AppContext } from '../../contexts/AppContext';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Form() {
    const { openConfirmModal } = useContext(AppContext);

    const history = useHistory();

    const [values, setValues] = useState({
        name: '',
        email: '',
        text: '',
    });

    const notify = (message, type) => {
        if (type === "error") toast.error(message);
        else if (type === "info") toast.info(message);
        else if (type === "warning") toast.warn(message);
        else if (type === "success") toast.success(message);
        else toast(message);
    };

    async function sendMail(body) {
        try {
            await API.post("cupidoonline", "/send", {body});
            openConfirmModal();
        } catch (e) {
            console.error(e);
            notify("Falha ao enviar o e-mail!", "error");
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !text) {
            notify("Preencha todos os campos!", "info");
        } else {
            const body = {
                name: name,
                email: email,
                text: text
            };

            try {
                await sendMail(body);
                history.push("/");
            } catch (e) {
                console.error(e);
            }
        }
    }

    const { name, email, text } = values;

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <p>Preencha os campos abaixo, que nós enviaremos um e-mail anônimo para o seu crush!</p>

                    <label>Nome do crush</label>
                    <input onChange={handleChange('name')} placeholder="Nome" type="text" />

                    <label>E-mail</label>
                    <input onChange={handleChange('email')} placeholder="Email" type="email" />

                    <label>Mensagem</label>
                    <textarea onChange={handleChange('text')} placeholder="Mensagem..." type="text" />

                    <button type="submit">ENVIAR</button>
                </form>
            </Container>
            <ToastContainer />
        </>
    );
}