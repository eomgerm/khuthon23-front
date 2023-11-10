"use client";

import axiosClient from "@/common/axiosClient";
import HotCard from "@/components/HotCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const buttonNotClickedStyle = "border border-border-primary bg-none bg-white/10";
  const categoryValue = {
    all: "ALL",
    local: "LOCAL",
    firm: "FIRM",
    friend: "FRIEND",
  };
  const [category, setCategory] = useState(categoryValue.all);
  const [hotQuestions, setHotQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  type Question = {
    id: number;
    title: string;
    contents: string;
    category: string;
    likeCount: number;
  };

  const getHotQuestions = async () => {
    try {
      const { data } = await axiosClient.get(`/question/all`);
      console.log(data);
      setHotQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuestionsByCategory = async (category: string) => {
    try {
      const { data } = await axiosClient.get(`/question/${category.toLowerCase()}`);
      console.log(data);
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCategoryButton = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    setCategory(e.currentTarget.value);
  };

  useEffect(() => {
    getHotQuestions();
  }, []);

  useEffect(() => {
    getQuestionsByCategory(category);
  }, [category]);

  return (
    <>
      <div className="flex flex-col p-5">
        <header className="container mb-10">
          <div className="bg-white px-4 py-4 rounded-full flex-row flex">
            <Image src="/svgs/search.svg" alt="search" width={25} height={25} className="flex mr-4" />
            <input type="text" placeholder="검색어 입력" className="flex w-full" />
          </div>
        </header>
        <main className="overflow-hidden">
          <h1 className="text-4xl font-bold px-4 mb-4">핫 플래닛 🪐</h1>
          <div className="overflow-auto h-fit w-full whitespace-nowrap scrollbar-hide p-2 mb-10">
            {hotQuestions.map(({ id, title, contents, likeCount }: Question) => (
              <Link href="/question/7" key={id}>
                <HotCard title={title} contents={contents}></HotCard>
              </Link>
            ))}
          </div>
          <h1 className="text-4xl font-bold px-4 mb-4">💝 토픽 별로 보기</h1>
          <div className="overflow-auto h-fit w-full whitespace-nowrap scrollbar-hide p-2 mb-3">
            <button
              value={categoryValue.all}
              className={`${category !== categoryValue.all ? buttonNotClickedStyle : ""}w-fit h-10 px-5 py-2 rounded-full mr-3`}
              onClick={handleClickCategoryButton}
            >
              <p className="text-center">전체</p>
            </button>
            <button
              value={categoryValue.local}
              className={`${category !== categoryValue.local ? buttonNotClickedStyle : ""}w-fit h-10 px-5 py-2 rounded-full mr-3`}
              onClick={handleClickCategoryButton}
            >
              <p>지역 공동체</p>
            </button>
            <button
              value={categoryValue.firm}
              className={`${category !== categoryValue.firm ? buttonNotClickedStyle : ""}w-fit h-10 px-5 py-2 rounded-full mr-3`}
              onClick={handleClickCategoryButton}
            >
              <p>회사 생활</p>
            </button>
            <button
              value={categoryValue.friend}
              className={`${category !== categoryValue.friend ? buttonNotClickedStyle : ""}w-fit h-10 px-5 py-2 rounded-full mr-3`}
              onClick={handleClickCategoryButton}
            >
              <p>친구 관계</p>
            </button>
          </div>
          <div className="overflow-auto">
            {questions.map(({ id, title, contents }: Question) => {
              title = title.length > 15 ? title.slice(0, 15) + "..." : title;
              contents = contents.length > 30 ? title.slice(0, 30) + "..." : contents;
              return (
                <div key={id} className="items-center justify-between flex p-6 w-full h-28 bg-white/10 flex-row rounded-lg whitespace-normal mb-3">
                  <div>
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p>{contents}</p>
                  </div>
                  <img src="https://picsum.photos/200" alt="" width={64} height={64} className="rounded-lg" />
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <button className="flex justify-center items-center rounded-full w-16 h-16 bg-primary shadow-lg sticky -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl text-center text-white font-bold">+</h1>
      </button>
    </>
  );
}
