import { ChangeEvent } from "react";
import { Button } from "@mui/material";
import InputPw from "../hooks_components/InputPw";
import InputText from "../hooks_components/InputText";
import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";

interface ILoginComponent {
  userId: string;
  onChangeUserId: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  pw: string;
  onChangePw: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickJoinBtn: () => void;
  onClickLoginBtn: (userId: string, pw: string) => void;
}

const LoginComponent = ({
  userId,
  onChangeUserId,
  pw,
  onChangePw,
  onClickJoinBtn,
  onClickLoginBtn,
}: ILoginComponent) => {
  return (
    <>
      <ColBox padding="0 1rem">
        <Text fontSize="2x" bold>
          LOGIN
        </Text>

        <ColBox>
          <Text fontSize="l" bold>
            아이디
          </Text>
          <InputText
            shadow
            value={userId}
            onChange={onChangeUserId}
            radius={0.25}
          />
        </ColBox>

        <ColBox>
          <Text fontSize="l" bold>
            비밀번호
          </Text>
          <InputPw shadow value={pw} onChange={onChangePw} radius={0.25} />
        </ColBox>

        <RowBox>
          <Button
            onClick={() => onClickLoginBtn(userId, pw)}
            variant="contained"
            color="primary"
          >
            로그인
          </Button>
          <Button onClick={onClickJoinBtn} variant="contained" color="info">
            회원가입
          </Button>
        </RowBox>
      </ColBox>
    </>
  );
};

export default LoginComponent;
