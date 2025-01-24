import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { AuthButton } from './AuthButton';
import { VerificationModal } from './VerificationModal';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('onboard');

  return (
    <section className="min-h-screen w-full py-10 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <img
              src="/placeholder.svg"
              alt="Sign up illustration"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Let's Get Started
                  </h1>
                  <p className="text-sm text-gray-600">Sign up your account</p>
                </div>

                {activeView === 'onboard' ? (
                  <div className="space-y-4 animate-fade-in">
                    <AuthButton
                      variant="primary"
                      icon={<Mail className="w-4 h-4" />}
                      onClick={() => setActiveView('email')}
                    >
                      Sign Up with Email
                    </AuthButton>
                    <AuthButton
                      variant="google"
                      icon={<Mail className="w-4 h-4" />}
                    >
                      Sign up with Google
                    </AuthButton>
                    <AuthButton
                      variant="facebook"
                      icon={<Mail className="w-4 h-4" />}
                    >
                      Sign up with Facebook
                    </AuthButton>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <AuthInput
                      type="email"
                      placeholder="Enter email"
                      icon={<Mail className="w-4 h-4" />}
                    />
                    <AuthInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      icon={<Lock className="w-4 h-4" />}
                      rightIcon={
                        showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )
                      }
                      onRightIconClick={() => setShowPassword(!showPassword)}
                    />
                    <AuthButton onClick={() => setIsModalOpen(true)}>
                      Continue
                    </AuthButton>
                    <button
                      onClick={() => setActiveView('onboard')}
                      className="text-sm text-gray-600 hover:text-[#3C43C1] transition-colors"
                    >
                      ← Back to sign up options
                    </button>
                  </div>
                )}

                <div className="text-center text-sm text-gray-600">
                  <p className="mb-4">
                    By continuing you agree to our{' '}
                    <button className="font-semibold text-gray-900 hover:underline">
                      Terms & Conditions
                    </button>{' '}
                    and{' '}
                    <button className="font-semibold text-gray-900 hover:underline">
                      Privacy Policy
                    </button>
                  </p>
                  <p>
                    Already have an account?{' '}
                    <button className="font-semibold text-gray-900 hover:underline">
                      Log in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default SignUp;
