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
  return (
    <ColBox>
      <Login
      // userId={userId}
      // pw={pw}
      // isLoginConfirm={isLoginConfirm}
      // isWarnAlert={isWarnAlert}
      // onChangeUserId={onChangeUserId}
      // onChangePw={onChangePw}
      // onClickJoinBtn={onClickJoinBtn}
      // onClickLoginBtn={onClickLoginBtn}
      />
    </ColBox>
  );
};

export default LoginPage;
