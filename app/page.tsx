"use client";

import axiosClient from "@/common/axiosClient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("hi");
    axiosClient.get("https://picsum.photos/200/300");
  }, []);

  return <div>kuthon23</div>;
}
