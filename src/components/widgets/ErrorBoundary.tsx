// components/widgets/ErrorBoundary.tsx
'use client';
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('Widget Error:', error, info.componentStack);
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}