"use client"
import { useRouter } from "next/navigation";

const Hero = () => {

    const router = useRouter();

  return (
    <div className="h-lvh flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-slate-900">
        Let's Create a Blog...
      </h1>
      <p className="w-1/2 mt-5 text-slate-900 text-center">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <button
        className="mt-10 bg-slate-900 text-white p-3 rounded-lg border-none outline-none"
        onClick={() => router.push("/addblog")}
      >
        Get started
      </button>
    </div>
  );
};

export default Hero;
