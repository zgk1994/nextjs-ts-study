import { Button } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Index(props: any) {
  const router = useRouter()
  return (
    <div style={{ marginTop: 60 }}>
      <h1>我是评论列表,更新时间{props.currentDate}</h1>
      {props.info.comments.map((x: any) => {
        return (
          <h2 key={x.postId}>
            postId:{x.postId},username:{x.user.username},comments:{x.body}
          </h2>
        )
      })}
      <Button onClick={() => router.back()}>返回上一级</Button>
      <Button onClick={() => router.push('/posts')}>返回商品列表页</Button>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false, //当找不到对应路由时返回404
  }
}

export async function getStaticProps(context: any) {
  const currentDate = new Date().toString()
  let postId = context.params.postId
  let resp = await axios.get(`https://dummyjson.com/posts/${postId}/comments`)
  const info = resp.data
  return {
    props: {
      info,
      currentDate,
    },
    revalidate: 3000,
  }
}
