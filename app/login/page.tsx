"use client";

import axiosClient from "@/common/axiosClient";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLoginId = ({ target: { value } }: any) => setLoginId(value);
  const handleChangePassword = ({ target: { value } }: any) => setPassword(value);

  const handleClickLogin = async (e: any) => {
    e.preventDefault();
    const { data: memberId } = await axiosClient.post("/member/login", { loginId, password });
    localStorage.setItem("memberId", memberId);
    console.log(memberId);
  };

  return (
    <div className="flex flex-col p-5 h-screen relative">
      <h1 className="font-bold text-2xl mt-10 mb-20">
        로그인을 위한 정보를
        <br />
        입력해주세요
      </h1>
      <div className="w-full">
        <form>
          <input
            name="loginId"
            value={loginId}
            onChange={handleChangeLoginId}
            placeholder="아이디를 입력하세요."
            className="bg-transparent border-b border-border-primary py-3 pl-2 w-full mb-4"
          />
          <input
            name="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="비밀번호를 입력하세요."
            className="bg-transparent border-b border-border-primary py-3 pl-2 w-full"
          />
        </form>
      </div>
      <button onClick={handleClickLogin} className="rounded-xl py-4 w-full mt-24">
        <Link href="/">
          <p>로그인</p>
        </Link>
      </button>
    </div>
  );
};

export default SignUp;
