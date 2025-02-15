// src/pages/LandingPage/LandingPage.tsx
import { Container, Title, Text, Button } from '@mantine/core';
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <Container>
            <Title>Welcome to Our Ed-Tech Platform</Title>
            <Text>Empowering students, teachers, and parents with innovative tools.</Text>
            <Button>Sign Up Now</Button>
        </Container>
    );
};

export default LandingPage;