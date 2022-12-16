import React, { PropsWithChildren } from 'react'
import '../styles/scss/tailwind.scss'
import '../styles/scss/main.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head></head>
      <body>
        <div className={'layout'}>
          <Header />
          <main className={'main'}>{children}</main>
          {/*<Footer />*/}
        </div>
      </body>
    </html>
  )
}
export default RootLayout
