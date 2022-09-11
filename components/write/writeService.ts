import axios from "axios";
import { PostInputType } from "../../utils/types";

export const addPost = async (inputValue: PostInputType, uid: string) => {
  const body = {
    title: inputValue.title,
    content: inputValue.content,
    writer: JSON.parse(uid),
  };
  await axios.post("/api/write", body);
};

export const editPost = async (inputValue: PostInputType, postId: string) => {
  const body = {
    title: inputValue.title,
    content: inputValue.content,
  };
  await axios.post(`/api/write/edit/${postId}`, body);
};

export const deletePost = async (postId: string) => {
  await axios.delete(`/api/write/delete/${postId}`);
};
