import axios from "axios";
import { GetStaticPropsContext } from "next";
import DetailPost from "../../components/posts/PostDetail";
import { IPost } from "../../utils/types";

const PostPage = ({ post }: { post: IPost }) => {
  return (
    <>
      <DetailPost post={post} />
    </>
  );
};

export default PostPage;

const getPost = async (postId: string) => {
  const res = await axios.get(`http://localhost:3000/api/posts/${postId}`); // baseURL 까지 명시해야 함
  const data = await res.data;
  return data;
};

export async function getServerSideProps(ctx: GetStaticPropsContext) {
  const post: Promise<IPost> = await getPost(ctx.params?.postId as string); // 바로 사용
  return { props: { post } };
}
