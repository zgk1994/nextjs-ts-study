import Link from 'next/link'
// import { usePathname } from 'next/navigation'

export default function PostList({ posts }: any) {
  // const pathname = usePathname()
  // console.log(pathname)
  return (
    <ul>
      {posts.map((post: any) => {
        // console.log(pathname)
        // const isActive = pathname?.startsWith(post.href)
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
