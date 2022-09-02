import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <h1> 현재 포스트 {postId} </h1>
    </>
  );
};

export default PostPage;
