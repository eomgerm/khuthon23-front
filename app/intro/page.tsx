"use client";

import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Intro = () => {
  return (
    <div className="relative py-10 bg-intro h-screen bg-cover">
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-bold text-white text-center">
          마치 다른 행성에서
          <br />온 것처럼 느껴졌던
          <br />
          타인을 이해해 보세요
        </p>
      </div>
      <div className="flex flex-row px-5 absolute bottom-8 w-full">
        <button className="bg-white/20 px-6 py-4 rounded-full border border-white grow mr-5 bg-none">
          <Link href="/login" className="font-bold text-white">
            로그인
          </Link>
        </button>
        <button className="px-6 py-4 rounded-full grow">
          <Link href="/sign-up" className="font-bold text-white">
            회원가입
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Intro;
