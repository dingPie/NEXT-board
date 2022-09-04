import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IUser } from "../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = fs.readFileSync("server/user_file.json", "utf-8");
  console.log("쿼리문 확인", req.body);
  const newUsers: IUser[] = [...JSON.parse(users), req.body];
  fs.writeFileSync("server/user_file.json", JSON.stringify(newUsers));
  res.status(200).json(true);
};
