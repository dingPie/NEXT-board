import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ColBox } from "../../components/css_components/FlexBox";
import PostCard from "../../components/posts/fragments/PostCard";
import { IPost } from "../../utils/types";

const test: IPost = {
  title: "제목입니다",
  content: "내용입니다",
  writer: "작성자",
  crtDate: 1662390508339,
};

const MainPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const { posts } = posts;
  console.log(posts);

  return (
    <>
      <h1> Posts Page</h1>
      <ColBox>
        {posts.map((post: IPost) => (
          <PostCard post={post} />
        ))}
        <PostCard post={test} />
      </ColBox>
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
