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
        <div className="lg:w-full">
          <Chat />
        </div>
      </section>

      <div className='fixed inset-x-0 bottom-0'>
          <p className='mb-4 text-base leading-6 text-center'>
              © 2023 GIGPT.com by{' '}
              <a
                  href='https://www.linkedin.com/in/alfredoarriolajr/'
                  className='underline'>
                  Alfredo Arriola Jr. 
              </a>
          </p>
      </div>
    </Page>
  )
}

Home.Layout = Layout

export default Home
