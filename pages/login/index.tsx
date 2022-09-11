import { NextPage } from "next";
import { useRouter } from "next/router";
import Login from "../../components/login/Login";
import { ColBox } from "../../components/css_components/FlexBox";
import useInput from "../../utils/hooks/useInput";
import {
  checkValidPw,
  checkValidUserId,
} from "../../utils/service/login_service";
import { setLocalStorage } from "../../utils/service/local_service";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [userId, onChangeUserId] = useInput();
  const [pw, onChangePw] = useInput();
  const [isWarnAlert, setIsWarnAlert] = useState(false);
  const [isLoginConfirm, setIsLoginConfirm] = useState(false);

  const onClickJoinBtn = () => router.push("/login/join");

  const onClickLoginBtn = async (userId: string, pw: string) => {
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
  };

  useEffect(() => {
    if (checkValidUserId(userId) && checkValidPw(pw)) setIsLoginConfirm(true);
    else setIsLoginConfirm(false);
  }, [userId, pw]);

  useEffect(() => {
    if (isWarnAlert) {
      const time = setTimeout(() => setIsWarnAlert(false), 2000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [isWarnAlert]);

  return (
    <ColBox>
      <Login
        userId={userId}
        pw={pw}
        isLoginConfirm={isLoginConfirm}
        isWarnAlert={isWarnAlert}
        onChangeUserId={onChangeUserId}
        onChangePw={onChangePw}
        onClickJoinBtn={onClickJoinBtn}
        onClickLoginBtn={onClickLoginBtn}
      />
    </ColBox>
  );
};

export default LoginPage;
