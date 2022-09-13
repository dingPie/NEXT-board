import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Write from "../../components/write/Write";
import { QUERY_KEY } from "../../utils/const";
import { IPost } from "../../utils/types";

const EditPostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = useQuery([QUERY_KEY.GET_POST, postId], () =>
    getPost(postId as string),
  );

  return (
    <>
      <Write editData={post} />
    </>
  );
};

export default EditPostPage;

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
