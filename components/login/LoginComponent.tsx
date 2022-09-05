import { ChangeEvent } from "react";
import { Alert, Button } from "@mui/material";
import InputPw from "../hooks_components/InputPw";
import InputText from "../hooks_components/InputText";
import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";

interface ILoginComponent {
  userId: string;
  pw: string;
  isLoginConfirm: boolean;
  isWarnAlert: boolean;
  onChangeUserId: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickJoinBtn: () => void;
  onClickLoginBtn: (userId: string, pw: string) => void;
}

const LoginComponent = ({
  userId,
  pw,
  isLoginConfirm,
  isWarnAlert,
  onChangeUserId,
  onChangePw,
  onClickJoinBtn,
  onClickLoginBtn,
}: ILoginComponent) => {
  return (
    <>
      <ColBox padding="1rem">
        <Text fontSize="2x" bold>
          LOGIN
        </Text>

        <ColBox padding="1rem 0">
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

        <ColBox padding="1rem 0">
          <Text fontSize="l" bold>
            비밀번호
          </Text>
          <InputPw shadow value={pw} onChange={onChangePw} radius={0.25} />
        </ColBox>

        <RowBox padding=".5rem 0">
          <Button
            onClick={() => onClickLoginBtn(userId, pw)}
            disabled={!isLoginConfirm}
            variant="contained"
            color="primary"
          >
            로그인
          </Button>
          <Button onClick={onClickJoinBtn} variant="contained" color="info">
            회원가입
          </Button>
        </RowBox>

        {isWarnAlert && (
          <Alert variant="outlined" severity="warning">
            아이디, 비밀번호가 잘못되었습니다.
          </Alert>
        )}
      </ColBox>
    </>
  );
};

export default LoginComponent;
