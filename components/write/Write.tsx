import { Button, Input, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getLocalStorage } from "../../utils/service/local_service";
import { PostInputType, IPost } from "../../utils/types";
import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";
import { addPost, editPost } from "./writeService";

interface WriteComponentProps {
  editData?: IPost;
}

const WriteComponent = ({ editData }: WriteComponentProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<PostInputType>();

  const onClickAddBtn = handleSubmit(async (inputValue: PostInputType) => {
    const uid = getLocalStorage("uid");
    if (!uid) {
      // 이것도 ui 수정. toast나 alert이 필요함
      console.log("로그인이 만료되었습니다");
      return;
    }
    if (editData) editPost(inputValue, editData?.id);
    else addPost(inputValue, uid);

    router.push("/posts");
  });

  // 컴포넌트 load시, 제목 수정 focus
  useEffect(() => {
    if (editData) setFocus("content");
    else setFocus("title");
  }, [setFocus, editData]);

  return (
    <>
      <ColBox gap={0.5}>
        <Text fontSize="xl" bold>
          새 글 작성
        </Text>
        <RowBox justifyEnd>
          <Button onClick={onClickAddBtn} variant="contained">
            {editData ? "수정 완료" : "작성 완료"}
          </Button>
        </RowBox>
        <ColBox gap={1}>
          <TextField
            {...register("title")}
            defaultValue={editData?.title || ""}
            variant="standard"
            fullWidth
            placeholder="제목"
            size="medium"
          />
          <ColBox>
            <TextField
              {...register("content")}
              defaultValue={editData?.content || ""}
              label="내용"
              fullWidth
              multiline
              rows={20}
              placeholder="내용을 입력해주세요."
            />
          </ColBox>
        </ColBox>
      </ColBox>
    </>
  );
};

export default WriteComponent;
