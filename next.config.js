const withTM = require('next-transpile-modules')(['@material-ui/core', '@material-ui/system']);

module.exports = (phase, { defaultConfig }) => withTM({
  reactStrictMode: false,
  // Use webpack instead of Turbopack for compatibility
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
    };
    return config;
  },
  compress: true,
  env: {
    API: phase === 'phase-production-server' || phase === 'phase-production-build' ? 'https://www.simplimate.com.au' : 'http://localhost:3000',
    GAKEY: 'G-9K7MBD8JL1'
  },
})
