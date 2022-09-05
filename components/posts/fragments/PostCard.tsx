import { Button, ButtonGroup, Card, CardContent } from "@mui/material";
import styled from "styled-components";
import { setTextLine } from "../../../styles/styleCss";
import { getLocalStorage } from "../../../utils/service/local_service";
import { IPost } from "../../../utils/types";
import { ColBox, RowBox } from "../../css_components/FlexBox";
import Text from "../../css_components/Text";

interface IPostCard {
  post: IPost;
}

const PostCard = ({ post }: IPostCard) => {
  const userId = getLocalStorage("uid");

  return (
    <ColBox shadow radius={0.5} padding="1rem">
      <RowBox>
        <img
          src={post.thumbnail ? post.thumbnail : "./favicon.ico"}
          style={{ alignSelf: "center" }}
          width="80px"
          height="80px"
          alt=""
        />
        <ColBox padding=".5rem 0 0">
          <Text fontSize="xl" bold>
            {post.title}
          </Text>
          <DescText lineClamp={2}>{post.content}</DescText>
          <RowBox alignEnd padding=".5rem 0 0">
            <Text fontSize="s"> {post.crtDate} </Text>
            <Text fontSize="s"> {post.writer} </Text>
            {post.writer === userId && (
              <ButtonGroup>
                <WriterBtn variant="outlined" color="warning">
                  수정
                </WriterBtn>
                <WriterBtn variant="outlined" color="error">
                  삭제
                </WriterBtn>
              </ButtonGroup>
            )}
            <Text fontSize="s"> {post?.favoriteCnt} </Text>
          </RowBox>
        </ColBox>
      </RowBox>
    </ColBox>
  );
};

export default PostCard;

const DescText = styled(Text)`
  ${setTextLine}
`;

const WriterBtn = styled(Button)`
  padding: 0;
  font-size: 0.75rem;
`;
