import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';

import { Container } from './styles';

export default function Form() {
    const history = useHistory();
    const [values, setValues] = useState({
        name: '',
        email: '',
        text: '',
    });

    async function sendMail(body) {
        try {
            await API.post("emails", "/send", {body});
            console.log(body);
            console.log("E-mail enviado com sucesso!")
        } catch (e) {
            console.log('Falha ao enviar o e-mail!');
            console.log(e);
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !text) console.log("Preencha todos os campos!");
        else {
            const body = {
                name: name,
                email: email,
                text: text
            };

            try {
                await sendMail(body);
                history.push("/");
            } catch (e) {
                console.log(e);
            }
        }
    }

    const { name, email, text } = values;

    return (
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
    );
}