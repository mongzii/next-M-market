"use client";

import { useState, useEffect } from "react";

export default function Comment({ _id }) {
  let [comment, setComment] = useState("");
  let [list, setList] = useState([]); //여기에 댓글리스트들 담겨있음

  useEffect(() => {
    fetch("/api/comment/list?id=" + _id)
      .then(r => r.json())
      .then(result => {
        // console.log(result);
        setList(result);
      });
  }, []);

  return (
    <div>
      <hr />
      {/* <div>댓글목록보여줄부분</div> */}
      {list.length > 0
        ? list.map((a, i) => {
            return <p key={i}>{a.content}</p>;
          })
        : "댓글이 없습니다"}
      <input
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: _id }),
          });
        }}
      >
        댓글전송
      </button>
      {/* <div>{console.log(_id)}</div> */}
    </div>
  );
}
