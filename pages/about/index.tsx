import Link from 'next/link'

import { MainLayout } from '../../components/layouts/MainLayout'

import styles from '../../styles/Home.module.css'

export default function About() {
  return (
    <>
      <p>This is About</p>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}