"use client";

// import { signIn } from "next-auth/react";

// export default function LoginBtn() {
//   return (
//     <button
//       onClick={() => {
//         signIn();
//       }}
//     >
//       구글로그인
//     </button>
//   );
// }

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
