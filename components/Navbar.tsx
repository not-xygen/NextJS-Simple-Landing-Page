import Link from "next/link"
import Image from "next/image"
import type { NextComponentType } from "next"

const Navbar: NextComponentType = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" width={128} height={128} alt="Logo" />
			</div>
			<div className="navmenu">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
