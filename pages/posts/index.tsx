import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Posts from "../../components/posts/Posts";
import { IPost } from "../../utils/types";
import Text from "../../components/css_components/Text";
import React from "react";
import router from "next/router";

const PostsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default PostsPage;

const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/posts/getPosts"); // baseURL 까지 명시해야 함
  return res.data;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Promise<IPost[]> = await getPosts(); // 바로 사용

  return {
    props: { posts },
    revalidate: 5,
  };
};
