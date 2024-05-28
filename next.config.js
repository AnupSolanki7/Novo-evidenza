/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname:'www.en.etemaaddaily.com'
            },
            {
                hostname: 'uploads-ssl.webflow.com'
            }
        ]
    }
}

module.exports = nextConfig
