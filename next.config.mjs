/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
          },
        },
      });
    }
    return config;
  },
};

const withPWAConfig = withPWA({
  dest: 'public',
  // disable: true,
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(nextConfig);
