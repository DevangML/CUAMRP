const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    dest: 'public',
    scope: '/',
    runtimeCaching,
    //disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },

    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://localhost:5000/:path*',
    //         },
    //     ];
    // },

    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com'],
    },
});
