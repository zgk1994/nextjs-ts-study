/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// const withAntdLess = require('next-plugin-antd-less')

// module.exports = withAntdLess({
// })
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}