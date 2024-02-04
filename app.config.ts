export default {
  expo: {
    plugins: [['expo-font', {fonts: ['main/uis/Icon/*']}]],
    experiments: {
      baseUrl: '/dooboo-ui',
    },
    name: 'dooboo-ui',
    slug: 'dooboo-ui',
    privacy: 'public',
    platforms: ['ios', 'android', 'web'],
    orientation: 'default',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    assetBundlePatterns: ['**/*'],
    splash: {
      resizeMode: 'cover',
      image: './assets/splash.png',
      backgroundColor: '#ffffff',
    },
    web: {
      favicon: './assets/icon.png',
      bundler: 'metro',
    },
  },
};
