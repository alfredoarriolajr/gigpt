import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6 text-center">
        <Text variant="h1">GI GPT</Text>
        <Text className="text-zinc-600">
          A GPT-3 powered chatbot for the AI community.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Assistant:</Text>
        <div className="lg:w-full">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
