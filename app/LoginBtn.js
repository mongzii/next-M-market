"use client";

import { useRouter } from "next/navigation";

export default function LoginBtn() {
  let router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        로그인
      </button>
    </div>
  );
}
