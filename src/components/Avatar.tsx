"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-4 border-blue-300 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl">
        <span className="text-4xl font-semibold text-white">MW</span>
      </div>
    );
  }

  return (
    <Image
      src="/matt-profile.jpg"
      alt="Matt Wang Profile Picture"
      width={200}
      height={200}
      className="rounded-full border-4 border-blue-300 shadow-2xl object-cover"
      onError={() => setError(true)}
      priority
    />
  );
}


