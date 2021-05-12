import React from "react";
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Navbar() {
    const history = useHistory();

    return (
        <Container>
            <h1 onClick={() => history.push('/')}>CUPIDO ONLINE</h1>
            <div>
                <button onClick={() => history.push('/login')}>Log In</button>
                <button onClick={() => history.push('/')}>Sign Up</button>
            </div>
        </Container>
    );
}