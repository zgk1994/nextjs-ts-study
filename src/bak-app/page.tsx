'use client'
import Link from 'next/link'
import axios from 'axios'
// import { useEffect, useState } from 'react'
export default function Page(props: any) {
  return (
    <>
      <h2>{props.currentDate}</h2>
      <ul>
        {props.postData.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
function getCurrentTime() {
  return new Date().toString()
}

export async function getStaticProps() {
  const currentDate = getCurrentTime()
  let resp = await axios.get('https://dummyjson.com/products')
  const postData = resp.data.products
  return {
    props: {
      currentDate,
      postData,
    },
  }
}
