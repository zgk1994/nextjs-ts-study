// 'use client'
// import { Button } from 'antd'

// export default function Index() {
//   return (
//     <div>
//       <span>404</span>
//       <Button type="primary">Button</Button>
//     </div>
//   )
// }

import { useRouter } from 'next/router'
import { Button, Result } from 'antd'
import React from 'react'

const NoFoundPage: React.FC = () => {
  const router = useRouter()
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={() => router.push('/posts')}>
          返回首页
        </Button>
      }
    />
  )
}

export default NoFoundPage
