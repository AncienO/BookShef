"use client";

import { useEffect, useState } from "react";

export default function Greeting({ name }: { name: string }) {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <h1 className="text-3xl font-bold text-white tracking-tight">
      {greeting}, <span className="text-brand-400">{name}</span>
    </h1>
  );
}
