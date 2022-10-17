interface Props {
	post?: any
}

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await res.json()

	const paths = data.map((post: any) => {
		return { params: { id: post.id.toString() } }
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const id = context.params.id
	const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
	const data = await res.json()

	return {
		props: { post: data },
	}
}

const Details = ({ post }: Props) => {
	return (
		<div>
			<h1>Details Page</h1>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<p>{post.userId}</p>
		</div>
	)
}

export default Details
