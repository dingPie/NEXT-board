import { Button, Input, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { getLocalStorage } from "../../utils/service/local_service";
import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";
import InputText from "../hooks_components/InputText";
import InputTextArea from "../hooks_components/InputTextArea";

interface InputType {
  title: string;
  content: string;
}

const WriteComponents = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onClickAddBtn = handleSubmit(async (data: InputType) => {
    const uid = getLocalStorage("uid");
    if (!uid) {
      console.log("로그인이 만료되었습니다");
      return;
    }
    console.log("cli", data.title);
    const body = {
      title: data.title,
      content: data.content,
      writer: JSON.parse(uid),
    };
    await axios.post("/api/write", body);

    router.push("/posts");
  });
  return (
    <>
      <ColBox gap={0.5}>
        <Text fontSize="xl" bold>
          새 글 작성
        </Text>
        <RowBox justifyEnd>
          <Button onClick={onClickAddBtn} variant="contained">
            작성 완료
          </Button>
        </RowBox>
        <ColBox gap={1}>
          <TextField
            {...register("title")}
            variant="standard"
            fullWidth
            placeholder="제목"
            size="medium"
          />

          <TextField
            {...register("content")}
            label="내용"
            fullWidth
            multiline
            rows={50}
            placeholder="내용을 입력해주세요."
          />
        </ColBox>
      </ColBox>
    </>
  );
};

export default WriteComponents;

const InputTitle = styled(InputText)`
  border: 2px solid gray;
  padding: 1rem;
`;
