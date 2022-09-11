import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Posts from "../../components/posts/Posts";
import { IPost } from "../../utils/types";
import Text from "../../components/css_components/Text";
import React from "react";
import router from "next/router";

const PostsPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default PostsPage;

const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/posts/getPosts"); // baseURL 까지 명시해야 함
  const data = await res.data;
  return data;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Promise<IPost[]> = await getPosts(); // 바로 사용

  return {
    props: { posts },
    revalidate: 5,
  };
};
