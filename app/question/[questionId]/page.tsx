"use client";

import axiosClient from "@/common/axiosClient";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Question = ({ params: { questionId } }: any) => {
  const questionOptionValue = {
    agree: "AGREE",
    neutral: "NEUTRAL",
    disagree: "DISAGREE",
  };

  useEffect(() => {
    const getQuestion = async (questionId: number) => {};
    getQuestion(questionId);
  });

  const handleClickQuestinoButton = async (e: any) => {
    e.preventDefault();
    const { data } = await axiosClient.post(`/question/${questionId}/answer`, { questionOption: e.currentTarget.value });
  };

  return (
    <div className="flex flex-col px-5 pt-5 min-h-screen">
      <div className="bg-white/10 p-5 rounded-2xl h-[65vh]">
        <div className="flex flex-row items-center mb-8">
          <img src="https://picsum.photos/200" alt="" width={40} height={40} className="rounded-full mr-4" />
          <h2 className="text-center font-bold mt-1">어 이게 되네</h2>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl">친구 결혼식에 베이지색 원피스 입기</h1>
          <div className="h-0.5 w-full my-2 bg-border-primary"></div>
          <p>최근에 살이 좀 쪄서 이거 못입으면 새로 사야해서,,ㅠㅠ 좀 민폔가요??</p>
          <Image src="/image.png" alt="image" width={250} height={250} className="mt-5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 justify-center my-auto">
        <button
          value={questionOptionValue.agree}
          onClick={handleClickQuestinoButton}
          className="w-full rounded-full px-6 py-4 items-center justify-center flex"
        >
          <Link href={`/question/${questionId}/result?opinion=${questionOptionValue.agree}`} className="text-xl text-left">
            그럴 수도 있어
          </Link>
        </button>
        <button
          value={questionOptionValue.disagree}
          onClick={handleClickQuestinoButton}
          className="w-full rounded-full px-6 py-4 items-center justify-center flex bg-gradient-to-r from-[#FF4EF8] to-[#000E55]"
        >
          <Link href={`/question/${questionId}/result?opinion=${questionOptionValue.disagree}`} className="text-xl text-left">
            그러면 안되지
          </Link>
        </button>
        <button
          value={questionOptionValue.neutral}
          onClick={handleClickQuestinoButton}
          className="w-full bg-none bg-white/10 rounded-full px-6 py-4 items-center justify-center flex border border-border-primary"
        >
          <Link href={`/question/${questionId}/result?opinion=${questionOptionValue.neutral}`} className="text-xl text-left">
            글쎄, 난 좀 다른 의견이야
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Question;
