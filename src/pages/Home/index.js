import React from 'react';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';

import { Container, TextBox } from './styles';

export default function Home() {
    return (
        <Container>
            <Navbar />

            <TextBox>
                <h1>SEJA BEM-VINDO AO CUPIDO ONLINE!</h1>
                <p>Ajudamos você a mandar uma mensagem para o seu crush, sem que ele saiba que foi você!</p>
                <img src="/images/manTalking.png" alt="homem conversando online" />
            </TextBox>

            <Form/>
        </Container>
    );
}