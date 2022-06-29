import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <p>This is Home</p>
      <h1 className={styles.title}>
        Welcome to <Link href="/about">About</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}