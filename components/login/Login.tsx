import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";
import { useRouter } from "next/router";
import useInput from "../../utils/hooks/useInput";
import { setLocalStorage } from "../../utils/service/local_service";
import {
  checkValidPw,
  checkValidUserId,
  pwReg,
  userIdReg,
} from "../../utils/service/login_service";
import axios from "axios";
import { useForm } from "react-hook-form";
import { LoginInputType } from "../../utils/types";
import { boxShadow } from "../../styles/styleCss";

const Login = () => {
  const router = useRouter();
  const [isWarnAlert, setIsWarnAlert] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isValid },
  } = useForm<LoginInputType>({ mode: "onBlur" }); // 유효성 검사 모드, 현재 입력중인 input 창을 벗어나야 효력이 발생한다.

  const onClickJoinBtn = () => router.push("/login/join");

  const onClickLoginBtn = handleSubmit(async (inputValue: LoginInputType) => {
    const { userId, pw } = inputValue;
    const body = {
      userId: userId,
      pw: pw,
    };
    const res = await axios.post("/api/login/getUser", body);

    if (res.data) {
      setLocalStorage("uid", userId);
      router.replace("/posts");
    } else {
      setIsWarnAlert(true);
    }
  });

  // 로그인 결과에 따른 알럿창 처리
  useEffect(() => {
    if (isWarnAlert) {
      const time = setTimeout(() => setIsWarnAlert(false), 2000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [isWarnAlert]);

  // id input창 focus
  useEffect(() => setFocus("userId"), [isWarnAlert]);

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

          <TextField
            {...register("userId", { pattern: userIdReg, required: true })}
            variant="outlined"
            fullWidth
            size="small"
            style={{ boxShadow: boxShadow }}
          />
        </ColBox>

        <ColBox padding="1rem 0">
          <Text fontSize="l" bold>
            비밀번호
          </Text>

          <TextField
            type={"password"}
            {...register("pw", { pattern: pwReg, required: true })}
            variant="outlined"
            fullWidth
            size="small"
            style={{ boxShadow: boxShadow }}
          />
        </ColBox>

        <RowBox padding=".5rem 0">
          <Button
            onClick={onClickLoginBtn}
            disabled={!isValid}
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
          <Alert
            variant="outlined"
            severity="error"
            onClose={() => setIsWarnAlert(false)}
          >
            아이디, 비밀번호가 잘못되었습니다.
          </Alert>
        )}
      </ColBox>
    </>
  );
};

export default Login;
