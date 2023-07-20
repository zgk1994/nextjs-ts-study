export default function Home(props: any) {
  return (
    <div style={{ marginTop: 60 }}>
      <h1>我是首页，用来测试render和getTitle</h1>
    </div>
  )
}
Home.getTitle = function () {
  return {
    title: '我是 Home.getTitle 返回的对象',
  }
}

Home.render = function () {
  return <h1>Render from home</h1>
}
