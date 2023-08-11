import Link from "next/link"

const page = () => {
    return(
        <div className="bg-black w-14 h-4">
            <p className="text-cyan-50 text-center">Anton Wiji</p>
            <Link href="/pages/about">About</Link>
        </div>
    )
}

export default page