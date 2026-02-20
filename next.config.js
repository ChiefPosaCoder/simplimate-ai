const withTM = require('next-transpile-modules')(['@material-ui/core', '@material-ui/system']); // pass the modules you would like to see transpiled

module.exports = (phase, { defaultConfig }) => withTM({
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
    };
    return config;
  },
  compress: true,
  env: {
    
    /* phase === 'phase-development-server' */
    API: phase === 'phase-production-server' || phase === 'phase-production-build' ? 'https://www.simplimate.com.au' : 'http://localhost:3000', 

    /* Google Analytics*/
    GAKEY: 'G-9K7MBD8JL1'
  },


})



