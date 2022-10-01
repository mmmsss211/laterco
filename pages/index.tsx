import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/rom-profile.jpg'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Laterco</title>
        <meta name="description" content="Rom Raviv's custom instagram landing page creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Container>
        <Image src={profilePic} alt="Picture of Rom Raviv"/>
      </Container>
      </main>
    </>
  )
}

export default Home
