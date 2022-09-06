import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ColBox, RowBox } from "../../components/css_components/FlexBox";
import Text from "../../components/css_components/Text";
import { getLocalStorage } from "../../utils/service/local_service";
import { toDetailTime } from "../../utils/time";
import { IPost } from "../../utils/types";

interface IDetailPostComponent {
  post: IPost;
}
const DetailPostComponent = ({ post }: IDetailPostComponent) => {
  const { id, title, content, crtDate, favoriteCnt, writer } = post;

  const [userId, setUserId] = React.useState("");

  React.useEffect(() => {
    if (typeof getLocalStorage("uid") === "string") {
      const getUid = JSON.parse(getLocalStorage("uid") as string);
      setUserId(getUid);
    }
  }, []);

  return (
    <ColBox padding="1rem">
      <Text fontSize="3x" padding="1rem 0" bold>
        {title}
      </Text>
      <InfoBox justifyBetween>
        <RowBox gap={0.5}>
          <Text>{toDetailTime(crtDate)} </Text>
          <Text>•</Text>
          <Text> {writer} </Text>
        </RowBox>
        {post.writer === userId && (
          <ButtonGroup>
            <WriterBtn
              // onClick={e => onClickEditBtn(e, post)}
              variant="outlined"
              color="warning"
            >
              수정
            </WriterBtn>
            <WriterBtn
              // onClick={e => onClickDeleteBtn(e, post)}
              variant="outlined"
              color="error"
            >
              삭제
            </WriterBtn>
          </ButtonGroup>
        )}
      </InfoBox>
      <Text margin="2.5rem 0">{content}</Text>
    </ColBox>
  );
};

export default DetailPostComponent;

const WriterBtn = styled(Button)`
  padding: 0;
  font-size: 0.75rem;
`;

const InfoBox = styled(RowBox)`
  padding: 0.5rem 0;
  border-bottom: 2px solid #e5e5e5;
`;
