import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IPost } from "../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query;
  const posts = fs.readFileSync("server/posts_file.json", "utf-8");
  const result: IPost[] = JSON.parse(posts).filter(
    (post: IPost) => post.id === postId,
  )[0];
  res.status(200).json(result);
};
