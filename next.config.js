const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    async rewrites() {
        return [
            {
                source: '/flask/hello/:path*',
                destination: 'http://localhost:5000/hello/:path*',
            },
        ];
    },

    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com'],
    },
});
