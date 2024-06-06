"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const updateBlog = () => {

    const router = useRouter();

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    const response = await axios.get(`/api/addblog/${id}`);
    console.log(response.data.blog);
    setTitle(response.data.blog.title);
    setDescription(response.data.blog.description);
    setContent(response.data.blog.content);
    setSingleBlog(response.data.blog);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        const response = await axios.put(`/api/addblog/${singleBlog.id}`, {
          title,
          description,
          content,
        });
        alert('Blog updated successfully...');
        router.push('/');
  }

  return (
    <section className="flex flex-col items-center mt-10 w-5/6 m-auto text-slate-900">
      <h1 className="text-4xl font-bold">Create Blog</h1>
      <form
        className="w-6/12 mt-10 flex flex-col bg-whilte-400 m-auto h-screen"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="title"
          className="block text-sm leading-6 text-white-900 font-semibold"
        >
          Title
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="title"
            className="block w-full p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-white-900 mt-5"
        >
          Description
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="description"
            className="block w-full p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none"
            placeholder="Meta-Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="content"
          className="block text-sm font-medium leading-6 text-white-900 mt-5"
        >
          Content
        </label>
        <div className="mt-2">
          <textarea
            type="text"
            name="content"
            className="block w-full p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none"
            placeholder="Write content for your blog..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-slate-900 text-white mt-10 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default updateBlog;
