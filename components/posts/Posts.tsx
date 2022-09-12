import { Alert, Button, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import useCloseTimeout from "../../utils/hooks/useCloasToast";
import { IPost } from "../../utils/types";
import { ColBox, RowBox } from "../css_components/FlexBox";
import { deletePost } from "../write/writeService";
import DeleteModal from "./fragments/DeleteModal";
import PostCard from "./fragments/PostCard";

interface PostsProps {
  posts: IPost[];
}

const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState("");

  const onClickPost = (post: IPost) => {
    router.push({
      pathname: `/posts/${post.id}`,
    });
  };

  const onClickWriteBtn = () => router.push("/write");

  const onClickEditBtn = (e: MouseEvent<HTMLButtonElement>, post: IPost) => {
    e.stopPropagation();
    router.push(`/write/${post.id}`);
  };

  const onClickDeleteBtn = (e: MouseEvent<HTMLButtonElement>, post: IPost) => {
    e.stopPropagation();
    setIsOpenDeleteModal(true);
    setSelectedPostId(post.id);
  };

  const closeDeleteModal = () => setIsOpenDeleteModal(false);

  const onClickDeleteConfirmBtn = async (
    e: MouseEvent<HTMLButtonElement>,
    postId: string,
  ) => {
    e.stopPropagation();
    await deletePost(postId);
    router.push(router.asPath); // 강력 새로고침의 방법. 이게 router.reload보다 빠르다.
    closeDeleteModal();
    setIsOpenToast(true);
  };

  const [isOpenToast, setIsOpenToast] = useState(false);

  useCloseTimeout(isOpenToast, () => setIsOpenToast(false)); // 자동닫힘 hooks

  return (
    <>
      <RowBox justifyEnd padding="0 0 1rem">
        <Button onClick={onClickWriteBtn} variant="contained" color="primary">
          글 추가
        </Button>
      </RowBox>
      <ColBox gap={0.5}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onClickPost={onClickPost}
            onClickDeleteBtn={onClickDeleteBtn}
            onClickEditBtn={onClickEditBtn}
          />
        ))}
      </ColBox>
      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        selectedPostId={selectedPostId}
        closeDeleteModal={closeDeleteModal}
        onClickDeleteConfirmBtn={onClickDeleteConfirmBtn}
      />
      <Snackbar open={isOpenToast} onClose={() => setIsOpenToast(true)}>
        <Alert
          onClose={() => setIsOpenToast(false)}
          variant={"filled"}
          severity="info"
          sx={{ width: "100%" }}
        >
          삭제가 완료되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Posts;
