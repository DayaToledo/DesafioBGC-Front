import React from 'react';

import { Container, LoadingBox } from './styles';

export default function LevelUpModal(props) {
    return (
        <Container>
            <div>
                <p>Só um minuto...</p>
                <LoadingBox />
            </div>
        </Container>
    )
}