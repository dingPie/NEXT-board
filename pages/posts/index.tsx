import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import PostComponent from "../../components/posts/PostComponent";
import { IPost } from "../../utils/types";
import Text from "../../components/css_components/Text";

const MainPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Text fontSize="2x" bold padding="1rem .5rem">
        {" "}
        포스트 목록{" "}
      </Text>
      <PostComponent posts={posts} />
    </>
  );
};

export default MainPage;

const getPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/posts/getPosts"); // baseURL 까지 명시해야 함
  const data = await res.data;
  return data;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Promise<IPost[]> = await getPosts(); // 바로 사용

  return { props: { posts } };
};
