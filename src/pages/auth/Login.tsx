// src/pages/auth/Login.tsx
import { useAuth } from '@/hooks/use-auth'

const LoginPage = () => {
    const { login } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login('parent@example.com', 'password')
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Your login form inputs */}
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage