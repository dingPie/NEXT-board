import { MouseEvent } from "react";
import { Button, ButtonGroup, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { setTextLine } from "../../../styles/styleCss";
import { getLocalStorage } from "../../../utils/service/local_service";
import { IPost } from "../../../utils/types";
import { ColBox, RowBox } from "../../css_components/FlexBox";
import Text from "../../css_components/Text";
import { toPostTime } from "../../../utils/time";
import DeleteModal from "./DeleteModal";

interface IPostCard {
  post: IPost;
  onClickPost: (post: IPost) => void;
  onClickEditBtn: (e: MouseEvent<HTMLButtonElement>, post: IPost) => void;
  onClickDeleteBtn: (e: MouseEvent<HTMLButtonElement>, post: IPost) => void;
}

const PostCard = ({
  post,
  onClickPost,
  onClickEditBtn,
  onClickDeleteBtn,
}: IPostCard) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (typeof getLocalStorage("uid") === "string") {
      const getUid = JSON.parse(getLocalStorage("uid") as string);
      setUserId(getUid);
    }
  }, []);

  return (
    <ColBox
      onClick={() => onClickPost(post)}
      shadow
      radius={0.25}
      padding="1rem"
      style={{ cursor: "pointer" }}
    >
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
            <Text fontSize="s"> {toPostTime(post.crtDate)} </Text>
            <Text fontSize="s"> {post.writer} </Text>
            {post.writer === userId && (
              <ButtonGroup>
                <WriterBtn
                  onClick={e => onClickEditBtn(e, post)}
                  variant="outlined"
                  color="warning"
                >
                  수정
                </WriterBtn>
                <WriterBtn
                  onClick={e => onClickDeleteBtn(e, post)}
                  variant="outlined"
                  color="error"
                >
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
