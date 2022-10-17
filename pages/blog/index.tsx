import { ReactNode } from "react"
import Head from "next/head"
import type { NextPage } from "next"
import styles from "../../styles/Location.module.css"
import Link from "next/link"

interface Props {
	posts?: any
}

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await res.json()

	return {
		props: { posts: data },
	}
}

const Blog: NextPage = ({ posts }: Props) => {
	return (
		<>
			<Head>
				<title>Xploratech | Locations</title>
			</Head>
			<div>
				<h1>Blog Posts</h1>
				{posts.map((post: any) => {
					return (
						<Link href={"/blog/" + post.id} key={post.id}>
							<div className={styles.card}>
								<h2>{post.title}</h2>
							</div>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default Blog
