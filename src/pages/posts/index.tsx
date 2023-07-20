import Link from 'next/link'
import axios from 'axios'
export default function Page(props: any) {
  return (
    <div style={{ margin: '60px auto 0px', width: '35%' }}>
      <h2>{props.currentDate}</h2>
      <ul>
        {props.postData.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const currentDate = new Date().toString()
  let resp = await axios.get('https://dummyjson.com/products')
  const postData = resp.data.products
  return {
    props: {
      currentDate,
      postData,
    },
  }
}
