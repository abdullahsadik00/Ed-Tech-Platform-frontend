import '@mantine/core/styles.css';

import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Welcome to EdTech Platform</h1>
      <div className="flex gap-4">
        <Button component={Link} href="/auth/login">Login</Button>
        <Button component={Link} href="/auth/register">Register</Button>
      </div>
    </div>
  );
}