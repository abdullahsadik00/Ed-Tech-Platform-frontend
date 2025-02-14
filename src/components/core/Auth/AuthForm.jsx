'use client';

import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Box,
  Text,
  Tabs,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { motion } from 'framer-motion';
import { VerificationModal } from './verification-modal';

export function AuthForm() {
  const [activeTab, setActiveTab] = (useState < string) | (null > 'login');
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
    },
  });

  const registerForm = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: {
      firstName: (value) =>
        value.length > 0 ? null : 'First name is required',
      lastName: (value) => (value.length > 0 ? null : 'Last name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
    },
  });

  const handleLoginSubmit = loginForm.onSubmit((values) => {
    console.log('Login submitted', values);
  });

  const handleRegisterSubmit = registerForm.onSubmit((values) => {
    console.log('Register submitted', values);
    setIsVerificationModalOpen(true);
  });

  const handleVerification = (code) => {
    console.log('Verification code:', code);
    setIsVerificationModalOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs value={activeTab} onTabChange={setActiveTab} mb="xl">
          <Tabs.List grow>
            <Tabs.Tab value="login">Login</Tabs.Tab>
            <Tabs.Tab value="register">Register</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...loginForm.getInputProps('password')}
            />
            <Group position="apart" mt="md">
              <Checkbox
                label="Remember me"
                {...loginForm.getInputProps('rememberMe', { type: 'checkbox' })}
              />
              <Text component="a" href="#" size="sm">
                Forgot password?
              </Text>
            </Group>
            <Button fullWidth mt="xl" type="submit">
              Sign in
            </Button>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit}>
            <TextInput
              label="First Name"
              placeholder="Your first name"
              required
              {...registerForm.getInputProps('firstName')}
            />
            <TextInput
              label="Last Name"
              placeholder="Your last name"
              required
              mt="md"
              {...registerForm.getInputProps('lastName')}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              mt="md"
              {...registerForm.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...registerForm.getInputProps('password')}
            />
            <Button fullWidth mt="xl" type="submit">
              Register
            </Button>
          </form>
        )}

        <Divider my="xl" label="Or continue with" labelPosition="center" />

        <Button
          fullWidth
          variant="outline"
          onClick={() => console.log('Google sign in')}
        >
          Sign in with Google
        </Button>
      </motion.div>

      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onVerify={handleVerification}
      />
    </Box>
  );
}
