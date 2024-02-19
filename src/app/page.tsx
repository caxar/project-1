"use client";
import React from "react";
import { Header, Footer } from "@/ui";
import Main from "@/ui/organisms/Main/Main";
import About from "@/ui/organisms/About/About";
import Feedback from "@/ui/organisms/Feedback/Feedback";
import ScrollButton from "@/ui/organisms/ScrollButton/ScrollButton";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Main />
      <About />
      <Feedback />
      <ScrollButton />
      <Footer />
    </main>
  );
}
