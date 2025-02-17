'use client';
import { useAuth } from '@/hooks/use-auth';
import { Button, Group } from '@mantine/core';
import Link from 'next/link';

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-blue-600 text-white p-4">
            <Group justify="space-between">
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    {user && <Link href={`/dashboard/${user.role}`}>Dashboard</Link>}
                </div>
                {user ? (
                    <Button onClick={logout}>Logout</Button>
                ) : (
                    <Group>
                        <Button component={Link} href="/auth/login">Login</Button>
                        <Button component={Link} href="/auth/register">Register</Button>
                    </Group>
                )}
            </Group>
        </nav>
    );
}