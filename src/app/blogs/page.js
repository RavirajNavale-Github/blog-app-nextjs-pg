// import { Card } from "flowbite-react";
'use client'

import Link from "next/link";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addblog/");

    if (!res.ok) {
      throw new Error("Failed To fetch blogs");
    }
    // console.log(res);

    return res.json();
  } catch (error) {
    console.log("Error fetching blogs", error);
  }
};

const blogs = async () => {
  const { blogs } = await getBlogs();
  console.log("blogs====",blogs)

  return (
    <>
      <div className="flex  pt-10">
        {blogs.map((blog) => (
          <div
            className="max-w-sm p-6 bg-slate-800 text-white border border-gray-200 rounded-lg shadow "
            key={blog.id}
          >
            <h5 className=" text-2xl font-bold tracking-tight">
              Title: {blog.title}
            </h5>
            <p className="font-normal">Description: {blog.description}</p>
            <button className="flex w-full justify-center rounded-md bg-white text-slate-900 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm relative bottom-0">
              <Link href={`singleblog/${blog.id}`}>View</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default blogs;
