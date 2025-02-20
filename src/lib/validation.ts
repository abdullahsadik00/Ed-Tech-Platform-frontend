export const passwordRules = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
  validate: {
    hasUpper: (value: string) =>
      /[A-Z]/.test(value) || 'At least one uppercase letter',
    hasNumber: (value: string) => /[0-9]/.test(value) || 'At least one number',
    hasSpecial: (value: string) =>
      /[^A-Za-z0-9]/.test(value) || 'At least one special character',
  },
};
