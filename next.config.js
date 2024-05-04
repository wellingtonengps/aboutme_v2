/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/?username=wellingtonengps&hide=html&layout=compact&theme=dracula',
      },
    ],
  },
}

module.exports = nextConfig
