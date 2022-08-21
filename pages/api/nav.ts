// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = Array<string>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json([
      "모바일앱",
      "웹",
      "프로그램",
      "쇼핑몰·커머스",
      "워드프레스",
      "데이터",
      "기획",
      "게임·AR·VR",
      "메타버스",
      "블록체인",
      "임베디드 HW·SW",
      "서버·호스팅",
      "데이터베이스",
      "보안",
      "챗봇",
      "QA·테스트",
      "기술지원",
      "파일변환",
      "기타",
    ]);
}
