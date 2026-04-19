module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; object-src 'none';" },
        ],
      },
    ];
  },
  images: {
    domains: ['example.com'], // replace with your allowed domains
  },
  env: {
    MY_API_KEY: process.env.MY_API_KEY,
    ANOTHER_ENV_VAR: process.env.ANOTHER_ENV_VAR,
  },
  optimizeFonts: true,
  performance: {
    gzip: true,
    compress: true,
  }
};
