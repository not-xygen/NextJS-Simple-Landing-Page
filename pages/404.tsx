import Link from "next/link"
import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push("/")
		}, 3000)
	}, [router])

	return (
		<>
			<Head>
				<title>Xploratech | 404</title>
			</Head>
			<div className="not-found">
				<h1>Ooopss....</h1>
				<h2>The page is not found</h2>
				<p>
					Go back to{" "}
					<Link href="/">
						<a>Home</a>
					</Link>
				</p>
			</div>
		</>
	)
}

export default NotFound
