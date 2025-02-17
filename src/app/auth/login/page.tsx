'use client';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '@/hooks/use-auth';

export default function LoginPage() {
    // const { login } = useAuth();
    const form = useForm({
        initialValues: { email: '', password: '' },
    });
    const login = () => {
        // await login(values);
        console.log("Calling login");
    };

    return (
        <div className="max-w-md mx-auto mt-20">
            <form onSubmit={form.onSubmit(login)}>
                <TextInput
                    label="Email"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    label="Password"
                    mt="md"
                    {...form.getInputProps('password')}
                />
                <Button type="submit" fullWidth mt="xl">
                    Sign in
                </Button>
            </form>
        </div>
    );
}