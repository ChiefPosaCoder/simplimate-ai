const withTM = require('next-transpile-modules')(['@material-ui/core', '@material-ui/system']);

module.exports = (phase, { defaultConfig }) => withTM({
  reactStrictMode: false,
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
    // Use relative URL in production (same domain)
    API: phase === 'phase-production-server' || phase === 'phase-production-build' ? '' : 'http://localhost:3000',
    GAKEY: 'G-9K7MBD8JL1'
  },
})
