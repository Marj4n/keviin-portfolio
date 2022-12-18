import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import CirnoLoader from '../cirno-loader'

const LazyCirno = dynamic(() => import('../cirno'), {
  ssr: false,
  loading: () => <CirnoLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kevin's homepage" />
        <meta name="author" content="Kevin Yardan Fauzan" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:site_name" content="Kevin Yardan Fauzan" />
        <meta name="og:title" content="Kevin Yardan Fauzan" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Homepage - Kevin Yardan</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyCirno />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
