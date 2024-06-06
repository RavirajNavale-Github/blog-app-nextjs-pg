'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  // console.log(username, password)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill all the Fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });

      if(res.ok){
        router.push('/');
        alert('Registration Done.')
      }else{
        throw new Error("Failed to Register")
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <>
      <section className="text-slate-900 flex flex-col items-center mt-10 w-5/6 m-auto">
        <div className="mt-10">
          <h1 className="text-4xl font-bold">Sign Up</h1>
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

export default Signup;
