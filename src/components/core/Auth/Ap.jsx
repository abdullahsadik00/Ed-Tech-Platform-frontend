import { MantineProvider, createEmotionCache } from '@mantine/core';
import { motion } from 'framer-motion';
import { AuthForm } from './AuthForm';

const emotionCache = createEmotionCache({ key: 'mantine' });

export default function Ap() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={emotionCache}
      theme={{
        colorScheme: 'light',
        primaryColor: 'indigo',
      }}
    >
      <div className="min-h-screen bg-[#dcdefe] flex items-center justify-center p-4 font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full bg-white flex rounded-xl shadow-xl overflow-hidden"
        >
          <AuthForm />

          {/* Right side - Onboarding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block w-1/2 bg-[#eff3ff] p-12"
          >
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-8">
                <img
                  src="https://ismailvtl-images-project.vercel.app/startup-launch.png"
                  alt="Onboarding illustration"
                  className="w-full max-w-md mx-auto"
                />
                <div className="max-w-sm mx-auto space-y-2">
                  <h2 className="text-2xl font-bold">
                    Turn your ideas into reality
                  </h2>
                  <p className="text-gray-600">
                    Consistent quality and experience across all platforms and
                    devices
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MantineProvider>
  );
}
