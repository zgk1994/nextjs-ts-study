'use client'
import { Button } from 'antd'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  return (
    <div>
      <span>postId - {router.query.postId}</span>
      <Button type="primary">Button</Button>
    </div>
  )
}
