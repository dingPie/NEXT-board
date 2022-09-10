import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IPost } from "../../utils/types";
import { ColBox, RowBox } from "../css_components/FlexBox";
import { deletePost } from "../write/writeService";
import PostCard from "./fragments/PostCard";

interface IPostsComponent {
  posts: IPost[];
}

const PostsComponent = ({ posts }: IPostsComponent) => {
  const router = useRouter();

  const onClickPost = (post: IPost) => {
    router.push({
      pathname: `/posts/${post.id}`,
    });
  };

  const onClickWriteBtn = () => {
    router.push("/write");
  };

  const onClickEditBtn = (e: MouseEvent<HTMLButtonElement>, post: IPost) => {
    e.stopPropagation();
    router.push(`/write/${post.id}`);
  };

  const onClickDeleteBtn = async (
    e: MouseEvent<HTMLButtonElement>,
    post: IPost,
  ) => {
    e.stopPropagation();
    // mui alert으로 수정하자
    const confirm = window.confirm("정말 이 글을 삭제할까요?");
    if (!confirm) return;
    await deletePost(post.id);
    router.push(router.asPath); // 강력 새로고침의 방법. 이게 router.reload보다 빠르다.
  };

  return (
    <>
      <RowBox justifyEnd padding="0 0 1rem">
        <Button onClick={onClickWriteBtn} variant="contained" color="primary">
          글 추가
        </Button>{" "}
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
    </>
  );
};

export default PostsComponent;
