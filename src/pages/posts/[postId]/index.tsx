import { Button } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'
// import Image from 'next/image'

export default function Index(props: any) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading......</h1>
  } else {
    return (
      <div style={{ marginTop: 100 }}>
        <h2>{props.currentDate}</h2>
        <h3>idAndTitle:{props.info.id + '-' + props.info.title}</h3>
        <h3>price:{props.info.price}</h3>
        <h3>discountPercentage:{props.info.discountPercentage}</h3>
        <h3>rating:{props.info.rating}</h3>
        <h3>stock:{props.info.stock}</h3>
        <h3>brand:{props.info.brand}</h3>
        <h3>category:{props.info.category}</h3>
        <h3>thumbnail:{props.info.thumbnail}</h3>
        <h3>description:{props.info.description}</h3>
        {/* <Image src={props.info.thumbnail} alt="" /> */}
        {/* {props.info.images.map((url: string) => {
        return <Image src={url} alt="" />
      })} */}
        <br />
        <Button onClick={() => router.push(`/posts/${props.info.id}/comments`)}>
          查看评论列表
        </Button>
        <Button onClick={() => router.back()}>返回上一级</Button>
        <Button onClick={() => router.push('/posts')}>返回列表页</Button>
      </div>
    )
  }
}

// export async function getStaticPaths() {
//   let resp = await axios.get('https://dummyjson.com/products')
//   const paths = resp.data.products.map((x: any) => {
//     return {
//       params: {
//         postId: x.id + '',
//       },
//     }
//   })
//   console.log('paths:', paths)
//   return {
//     paths,
//     fallback: false, //当找不到对应路由时返回404
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: true, //当找不到对应路由时返回404
  }
}

export async function getStaticProps(context: any) {
  const currentDate = new Date().toString()
  let postId = context.params.postId
  let resp = await axios.get(`https://dummyjson.com/products/${postId}`)
  const info = resp.data
  return {
    props: {
      info,
      currentDate,
    },
  }
}
