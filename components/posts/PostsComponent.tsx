import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IPost } from "../../utils/types";
import { ColBox } from "../css_components/FlexBox";
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

  const onClickEditBtn = (e: MouseEvent<HTMLButtonElement>, post: IPost) => {
    e.stopPropagation();
    console.log("edit");
  };

  const onClickDeleteBtn = (e: MouseEvent<HTMLButtonElement>, post: IPost) => {
    e.stopPropagation();
    console.log("delete");
  };

  return (
    <>
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
