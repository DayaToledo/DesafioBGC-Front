import React, { useState, useContext  } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';

import { Container } from './styles';
import { AppContext } from '../../contexts/AppContext';
import Loading from '../../components/Loading';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Form() {
    const { openConfirmModal } = useContext(AppContext);

    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        name: '',
        email: '',
        text: '',
    });

    async function sendMail(body) {
        try {
            await API.post("cupidoonline", "/send", {body});
            setLoading(false);
            openConfirmModal();
        } catch (e) {
            setLoading(false);
            console.error(e);
            toast.error("Falha ao enviar o e-mail!");
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !text) {
            toast.info("Preencha todos os campos!");
        } else {
            setLoading(true);

            const body = {
                name: name,
                email: email,
                text: text
            };

            try {
                await sendMail(body);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.error(e);
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

                {loading && <Loading />}

            </form>
        </Container>
    );
}