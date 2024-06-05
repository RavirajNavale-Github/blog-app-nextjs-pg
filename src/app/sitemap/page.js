import Link from "next/link"

const sitemap = () => {
  return (
    <div className=" text-slate-900 text-lg font-semibold mt-28">
        <ul className="flex flex-col items-center justify-center gap-5">
          <li><Link href={'/'}>Home Page</Link></li>
          <li><Link href={'/aboutus'}>About Us</Link></li>
          <li><Link href={'/contactus'}>Contact Us</Link></li>
          <li><Link href={'/blogs'}>Blogs</Link></li>
          <li><Link href={'/addblog'}>Create Blog</Link></li>
        </ul>
    </div>
  )
}

export default sitemap