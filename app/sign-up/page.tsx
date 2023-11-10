"use client";

import axiosClient from "@/common/axiosClient";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const buttonNotClickedStyle = "bg-none bg-white/10 border border-border-primary";

  const genderValue = {
    man: "MAN",
    woman: "WOMAN",
  };
  const ageValue = {
    teenagers: "TEENAGERS",
    twenties: "TWENTIES",
    thirties: "THIRTIES",
    fourties: "FOURTIES",
    fifities: "FIFITIES",
    sixties: "SIXTIES",
  };

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(genderValue.man);
  const [age, setAge] = useState(ageValue.teenagers);
  const [nickname, setNickname] = useState("");

  const handleChangeLoginId = (e: any) => {
    console.log(e.target.value);
    setLoginId(e.target.value);
  };
  const handleChangePassword = (e: any) => setPassword(e.target.value);
  const handleChangeGender = (e: any) => {
    e.preventDefault();
    setGender(e.target.value);
  };
  const handleChangeAge = (e: any) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const handleChangeNickname = (e: any) => setNickname(e.target.value);

  const handleClickSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post("/member/join", { loginId, password, nickname, gender, age });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col p-5 h-screen relative">
      <h1 className="font-bold text-2xl mt-10 mb-20">
        회원가입을 위해 정보를
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
          <div className="flex flex-col my-8">
            <div className="flex flex-row items-center mb-5">
              <label className="mr-4 text-lg">성별</label>
              <button
                value={genderValue.man}
                onClick={handleChangeGender}
                className={`px-7 py-1 mr-4 rounded-full w-22 ${gender === genderValue.man ? "" : buttonNotClickedStyle}`}
              >
                남성
              </button>
              <button
                value={genderValue.woman}
                onClick={handleChangeGender}
                className={`px-7 py-1 rounded-full w-22 ${gender === genderValue.woman ? "" : buttonNotClickedStyle}`}
              >
                여성
              </button>
            </div>
            <div className="flex flex-row items-center">
              <label className="mr-4 text-lg">나이</label>
              <div className="flex flex-col">
                <div className="flex flex-row mb-3">
                  <button
                    value={ageValue.teenagers}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.teenagers ? "" : buttonNotClickedStyle}`}
                  >
                    10대
                  </button>
                  <button
                    value={ageValue.twenties}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.twenties ? "" : buttonNotClickedStyle}`}
                  >
                    20대
                  </button>
                  <button
                    value={ageValue.thirties}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.thirties ? "" : buttonNotClickedStyle}`}
                  >
                    30대
                  </button>
                </div>
                <div className="flex flex-row">
                  <button
                    value={ageValue.fourties}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.fourties ? "" : buttonNotClickedStyle}`}
                  >
                    40대
                  </button>
                  <button
                    value={ageValue.fifities}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.fifities ? "" : buttonNotClickedStyle}`}
                  >
                    50대
                  </button>
                  <button
                    value={ageValue.sixties}
                    onClick={handleChangeAge}
                    className={`px-4 py-1 mr-4 rounded-full ${age === ageValue.sixties ? "" : buttonNotClickedStyle}`}
                  >
                    60대 이상
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input
            onChange={handleChangeNickname}
            placeholder="닉네임을 입력하세요."
            className="bg-transparent border-b border-border-primary py-3 pl-2 w-full"
          />
        </form>
      </div>
      <button onClick={handleClickSignUp} className="rounded-xl py-4 mt-20">
        <Link href="/login">가입하기</Link>
      </button>
    </div>
  );
};

export default SignUp;
