import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IPost } from "../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const posts = fs.readFileSync("server/posts_file.json", "utf-8");
  const result: IPost[] | undefined = JSON.parse(posts);
  res.status(200).json(result);
};
