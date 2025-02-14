import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, TextInput, Text, Group } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
const VerificationModal = ({ isOpen, onClose, onVerify }) => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const handleInputChange = (index, value) => {
    // TODO: Implement input validation and handle code change
    if (code.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && code[index] === '') {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };
  const handleVerify = () => {
    if (code.length === 6) {
      onVerify(verificationCode);
      const verificationCode = code.join('');
      onClose();
    }
  };
  useEffect(() => {
    if (isOpen) {
      // TODO:WWhenever the modal is opened set code to empty
      setTimeout(() => document.getElementById('code-0')?.focus(), 100);
    }
  }, [isOpen]);
  return (
    <Modal opened={isOpen} onClose={onClose} title="Verification" centered>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 300 }}
          >
            <Text mb="md" align="center">
              Please enter the verification code sent to your email
            </Text>
            <Group grow mb="md">
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  id={`code-${index}`}
                  type="tel"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  // focusBorderColor="primary"
                  className="w-[60px] h-[40px] rounded-md text-center"
                  style={{ width: '3rem' }}
                  styles={{ input: { textAlign: 'center' } }}
                />
              ))}
            </Group>
            <Button fullWidth onClick={handleVerify}>
              Verify
            </Button>
            <Text align="center" size="sm" mt="md">
              {' '}
              Can't access your email?{' '}
              <Text component="a" href="#" variant="link">
                Contact support
              </Text>
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      VerificationModal
    </Modal>
  );
};
export default VerificationModal;
