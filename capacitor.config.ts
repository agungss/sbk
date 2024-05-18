import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pemrogramancepat.sbkquiz',
  appName: 'SBKQuiz',
  webDir: 'dist/quizapp',
  server: {
    androidScheme: 'https'
  }
};

export default config;
