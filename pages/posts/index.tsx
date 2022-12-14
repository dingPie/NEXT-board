import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Posts from "../../components/posts/Posts";
import { IPost } from "../../utils/types";
import Text from "../../components/css_components/Text";
import React from "react";
import router from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { QUERY_KEY } from "../../utils/const";

const PostsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { data: posts } = useQuery(QUERY_KEY.GET_POSTS, getPosts);

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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(QUERY_KEY.GET_POSTS, getPosts);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 5,
  };
};
