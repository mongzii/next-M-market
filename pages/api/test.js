//서버기능 만드는거다

export default function handler(req, res) {
  //console.log(123);
  if (req.method == "POST") {
    return res.status(200).json("처리완료");
  }
}
