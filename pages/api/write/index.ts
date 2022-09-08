import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IPost } from "../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, writer } = req.body;
  console.log(title);
  const posts = fs.readFileSync("server/posts_file.json", "utf-8");
  const newPost: IPost = {
    id: Date.now().toString(),
    title: title,
    content: content,
    writer: writer,
    crtDate: Date.now(),
  };
  const newPosts = [...JSON.parse(posts), newPost];
  fs.writeFileSync("server/posts_file.json", JSON.stringify(newPosts));
  res.status(200).json(true);
};
