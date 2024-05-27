/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname:'marksmanhealthcare.com'
            }
        ]
    }
}

module.exports = nextConfig
