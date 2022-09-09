import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import { IPost } from "../../../../utils/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content } = req.body;
  const { postId } = req.query;
  const posts = fs.readFileSync("server/posts_file.json", "utf-8");

  const editedPosts = JSON.parse(posts).map((post: IPost) =>
    post.id === postId ? { ...post, title: title, content: content } : post,
  );
  fs.writeFileSync("server/posts_file.json", JSON.stringify(editedPosts));
  res.status(200).json(true);
};
