import MainLayout from '@/layout/main'
import List from '@/components/list'

function Article() {
  return <article className="col-span-6 mt-10 p-10">test</article>
}

export default function Home() {
  return (
    <MainLayout>
      <List />
      <Article />
    </MainLayout>
  )
}
