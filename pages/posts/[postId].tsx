import axios from "axios";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import DetailPost from "../../components/posts/PostDetail";
import { QUERY_KEY } from "../../utils/const";
import { IPost } from "../../utils/types";

const PostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = useQuery([QUERY_KEY.GET_POST, postId], () =>
    getPost(postId as string),
  );

  return (
    <>
      <DetailPost post={post} />
    </>
  );
};

export default PostPage;

const getPost = async (postId: string) => {
  const res = await axios.get(`http://localhost:3000/api/posts/${postId}`); // baseURL 까지 명시해야 함
  return res.data;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const { postId } = ctx.params!;
  await queryClient.prefetchQuery([QUERY_KEY.GET_POST, postId], () =>
    getPost(postId as string),
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}
