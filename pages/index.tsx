import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Star wars info!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Star wars data!</h1>

                <div className={styles.grid}>
                    <Link href="/people">
                        <a className={styles.card}>
                            <h2>People! &rarr;</h2>
                            <p>Check out all the people!</p>
                        </a>
                    </Link>

                    <Link href="/people">
                        <a className={styles.card}>
                            <h2>People! &rarr;</h2>
                            <p>Check out all the people!</p>
                        </a>
                    </Link>
                    {/* 
                    <Link href="/films">
                        <a className={styles.card}>
                            <h2>Films! &rarr;</h2>
                            <p>Check out awesome films!</p>
                        </a>
                    </Link>

                    <Link href="/films">
                        <a className={styles.card}>
                            <h2>Films! &rarr;</h2>
                            <p>Check out awesome films!</p>
                        </a>
                    </Link> */}
                </div>
            </main>
        </div>
    )
}
