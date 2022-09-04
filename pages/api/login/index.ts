import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IUser } from "../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, pw } = req.body;
  const users = fs.readFileSync("server/user_file.json", "utf-8");
  const getUser: IUser | undefined = JSON.parse(users).filter(
    (user: IUser) => user.userId === userId && user.pw === pw,
  )[0];
  res.status(200).json(getUser?.userId);
};
