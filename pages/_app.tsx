import type { AppProps } from 'next/app'


import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <div className='bg-slate-900 min-h-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default App
