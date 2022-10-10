const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"]
  }
});
