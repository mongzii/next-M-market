"use client";

import Link from "next/link";
import WriteBtn from "./WriteBtn";

export default function BoardItem({ data }) {
  return (
    <div>
      <h2>Q & A</h2>
      {data.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/` + data[i]._id}>
              <h4>{data[i].title}</h4>
            </Link>
            <p>{data[i].content}</p>
            {/* <p>{data[i]._id}</p> */}
            <Link href={`/board/edit/` + data[i]._id}>수정</Link>
            <button
              onClick={e => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: data[i]._id,
                })
                  .then(r => r.json)
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <WriteBtn />
    </div>
  );
}
