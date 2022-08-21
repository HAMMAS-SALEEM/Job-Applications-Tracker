import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => setCounter(counter+1);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Counter Application</h1>
        <h2 className={styles.heading}>{counter}</h2>
        <button type="button" onClick={handleCounter}>Increment</button>
      </main>
    </div>
  )
}

export default Home
