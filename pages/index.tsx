import Link from "next/link"
import Head from "next/head"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Xploratech | Home</title>
			</Head>
			<div>
				<h1>Homepage</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eveniet aut laudantium id adipisci amet, iusto pariatur,
					aperiam laborum libero repudiandae est deleniti nihil!
					Perferendis nulla quod qui eum pariatur officiis?
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eveniet aut laudantium id adipisci amet, iusto pariatur,
					aperiam laborum libero repudiandae est deleniti nihil!
					Perferendis nulla quod qui eum pariatur officiis?
				</p>
				<Link href="/blog">
					<a className={styles.locationButton}>See more posts</a>
				</Link>
			</div>
		</>
	)
}

export default Home
