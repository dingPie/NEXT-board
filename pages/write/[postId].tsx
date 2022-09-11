import axios from "axios";
import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Write from "../../components/write/Write";
import { IPost } from "../../utils/types";

const EditPostPage: NextPage<{ post: IPost }> = ({ post }) => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <Write editData={post} />
    </>
  );
};

export default EditPostPage;

const getPost = async (postId: string) => {
  const res = await axios.get(`http://localhost:3000/api/posts/${postId}`); // baseURL 까지 명시해야 함
  const data = await res.data;
  return data;
};

export async function getServerSideProps(ctx: GetStaticPropsContext) {
  const post: Promise<IPost> = await getPost(ctx.params?.postId as string); // 바로 사용
  return { props: { post } };
}
