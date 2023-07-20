import Head from 'next/head'

export default function Index(props: any) {
  return (
    <div style={{ marginTop: 60 }}>
      <Head>
        <title>测试next的Head组件</title>
      </Head>
      测试内容
    </div>
  )
}
