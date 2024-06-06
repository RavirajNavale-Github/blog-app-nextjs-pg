"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Signin = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(username, password)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill all the Fields!");
    }

    // console.log(username, password);

    try {
      // console.log("Inside try================================================================")
      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      })

      if(res.error){
        throw new Error("Invalid Credentials Failed to Login")
      }
      // console.log("Redirect to main")
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="text-slate-900 flex flex-col items-center mt-10 w-5/6 m-auto">
        <div className="mt-10">
          <h1 className="text-4xl font-bold">Sign In</h1>
        </div>
        <div className="w-3/5">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="font-semibold mb-1">Username</label>
            <input
              type="text"
              placeholder="SamsonPaul"
              className="p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="**********"
              className="p-2 border-slate-600 border-2 rounded-lg mb-3 outline-none "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="p-2 bg-slate-900 text-white rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};


export default Signin;
