"use client";
import axiosClient from "@/common/axiosClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VoteResult = ({ params: { questionId } }: any) => {
  const [value, setValue] = useState(0);
  const [comments, setComments] = useState([]);

  type Comment = {
    nickname: string;
    contents: string;
  };

  useEffect(() => {
    const getCommentsByOpinion = async () => {
      const { data } = await axiosClient.get(`/question/7/comment`);
      setComments(data);
    };
    setValue(75);
    getCommentsByOpinion();
  }, [questionId]);

  return (
    <div className="flex flex-col">
      <div className="bg-white/10 rounded-b-[40px] px-8 py-10 w-full flex flex-row justify-between items-center mb-5">
        <div className="w-56 h-fit bg-[#131621] p-5 rounded-full flex">
          <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.7,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: "#0093D3",
              trailColor: "#fff",
            })}
            strokeWidth={6}
          >
            <div className="w-2/3 h-2/3 bg-white rounded-full shadow-md flex items-center justify-center">
              <p className="text-primary font-bold text-xl">75%</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="w-fit flex flex-col space-y-8">
          <button className="p-1 bg-none bg-primary rounded-full flex w-12 h-12 justify-center items-center shadow-md"></button>
          <button className="p-1 bg-none bg-secondary rounded-full flex w-12 h-12 justify-center items-center shadow-md"></button>
          <button className="p-1 bg-none bg-[#242335] rounded-full flex w-12 h-12 justify-center items-center shadow-md border border-border-primary"></button>
        </div>
      </div>
      <h1 className="text-center font-bold mb-5">댓글</h1>
      <div className="flex flex-col px-5 overflow-auto items-start justify-center">
        {comments.map(({ nickname, contents }: Comment, index) => {
          return (
            <div key={index} className="flex flex-row mb-4 w-full">
              <img src="https://picsum.photos/200" alt="" width={40} height={40} className="rounded-full h-fit mr-4" />
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-lg mb-2">{nickname}</h1>
                  <button className="flex bg-none">
                    <Image src="/svgs/heart.svg" alt="like" width={25} height={25} className="flex" />
                  </button>
                </div>
                <p>{contents}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoteResult;
