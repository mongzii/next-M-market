import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  //정확한 테스트가 불가능하여 일단 여기까지만 하고 보류
  if (요청.method == "DELETE") {
    //console.log(요청.body); //id가 들어있다.
    if (session) {
      const client = await connectDB;
      const db = client.db("market");
      let 찾은거 = await db
        .collection("post")
        .findOne({ _id: new ObjectId(요청.body) }); // 이건 게시판 글의 정보인거다.
      //console.log(찾은거);

      let session = await getServerSession(요청, 응답, authOptions);
      //console.log(session);
      //찾은거의 author이랑 session.user.email이랑 같으면 삭제해라

      if (찾은거.author === session.user.email) {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(요청.body) });
        return 응답.status(200).json("삭제완료");
      } else {
        return 응답.status(500).json("작성한 글만 삭제할수있습니다.");
      }
    } else {
      return 응답.status(500).json("먼저 로그인하세요");
    }
  }

  // if (요청.method == "DELETE") {
  //   //console.log(JSON.parse(요청.body));
  //   const client = await connectDB;
  //   const db = client.db("market");
  //   let result = await db
  //     .collection("post")
  //     .deleteOne({ _id: new ObjectId(요청.body) });
  //   응답.status(200).json("삭제완료");
  // }
}
