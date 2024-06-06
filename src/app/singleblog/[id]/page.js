"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const res = await axios.get(
            `http://localhost:3000/api/addblog/${id}`
          );

          if (res.data.blog) {
            setBlog(res.data.blog);
          } else {
            alert("Blog not found");
            router.push('/blogs');
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="text-slate-900 text-center mt-28 font-bold text-3xl">
        Please wait we are Loading...
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      console.log('Hii')
      const response = await axios.delete(`http://localhost:3000/api/addblog/${id}`);
      alert('Deleted successfully');
      router.push('/');
    } catch (error) {
      console.error("Unable to delete blog:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-28 m-auto">
      <div className="p-6 w-1/3 bg-slate-800 text-white border border-gray-200 rounded-lg shadow ">
        <h5 className=" text-2xl font-bold tracking-tight">
          Title: {blog.title}
        </h5>
        <p className="font-semibold mt-3">Description: {blog.description}</p>
        <p className="font-normal mt-5">{blog.content}</p>
        <button
          className="flex w-full justify-center rounded-md bg-white text-slate-900 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm relative bottom-0"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="flex w-full justify-center rounded-md bg-white text-slate-900 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm relative bottom-0"
          onClick={() => router.push(`/updateblog/${blog.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
