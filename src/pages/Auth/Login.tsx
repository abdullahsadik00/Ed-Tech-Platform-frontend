// src/pages/Auth/Login.tsx
import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add authentication logic here
    };

    return (
        <div>
            <TextInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default Login;