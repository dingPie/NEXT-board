import { IPost } from "../../utils/types";
import { ColBox } from "../css_components/FlexBox";
import PostCard from "./fragments/PostCard";

interface IPostComponent {
  posts: IPost[];
}

const PostComponent = ({ posts }: IPostComponent) => {
  return (
    <>
      <ColBox>
        {posts.map(post => (
          <PostCard key={post.crtDate} post={post} />
        ))}
      </ColBox>
    </>
  );
};

export default PostComponent;
