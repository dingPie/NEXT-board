import { NextPage } from "next";
import { useRouter } from "next/router";
import LoginComponent from "../../components/login/LoginComponent";
import { ColBox } from "../../components/css_components/FlexBox";
import useInput from "../../utils/hooks/useInput";
import {
  checkValidPw,
  checkValidUserId,
} from "../../utils/service/login_service";
import { setLocalStorage } from "../../utils/service/local_service";

const Index: NextPage = () => {
  const router = useRouter();
  const [userId, onChangeUserId, resetUserId] = useInput();
  const [pw, onChangePw, resetPw] = useInput();

  const onClickJoinBtn = () => router.push("/login/join");
  const onClickLoginBtn = (userId: string, pw: string) => {
    if (checkValidUserId(userId) && checkValidPw(pw)) {
      setLocalStorage("uid", userId);
      router.push("/posts");
    } else {
      // 로그아웃 실패로직 임시구현
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      resetUserId();
      resetPw();
    }
  };

  return (
    <ColBox>
      <LoginComponent
        userId={userId}
        onChangeUserId={onChangeUserId}
        pw={pw}
        onChangePw={onChangePw}
        onClickJoinBtn={onClickJoinBtn}
        onClickLoginBtn={onClickLoginBtn}
      />
    </ColBox>
  );
};

export default Index;
