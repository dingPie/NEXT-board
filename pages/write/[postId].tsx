import { useRouter } from 'next/router';

const EditPostPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <h1> 수정할 포스트 {postId} </h1>
    </>
  );
};

export default EditPostPage;
