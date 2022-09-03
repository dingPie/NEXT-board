import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import JoinComponent from "../../components/login/JoinComponent";
import { ColBox } from "../../components/css_components/FlexBox";
import useInput from "../../utils/hooks/useInput";
import { setLocalStorage } from "../../utils/service/local_service";
import {
  checkValidPw,
  checkValidUserId,
} from "../../utils/service/login_service";

const JoinPage = () => {
  const router = useRouter();
  const [userId, onChangeUserId] = useInput();
  const [pw, onChangePw] = useInput();
  const [doublePw, onChangeDoublePw] = useInput();

  const [isValidUserId, setIsValidUserId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isJoinConfirm, setIsJoinConfirm] = useState(false);

  const onClickCancelBtn = () => router.push("/login");

  const onClickJoinBtn = () => {
    setLocalStorage("uid", userId);
    console.log(
      "회원가입 완료, 로직 실행: 로그인되는 아이디를 임시로 localstorage에 저장",
    );
    router.push("/login");
  };

  const onClickCheckUserIdBtn = (userId: string) => {
    checkValidUserId(userId) && setIsValidUserId(true);
  };

  useEffect(() => {
    setIsValidUserId(false);
  }, [userId]);

  // 가입 가능여부 disabled 상태 추적
  useEffect(() => {
    if (isValidUserId && isValidPw) setIsJoinConfirm(true);
    else setIsJoinConfirm(false);
  }, [isValidPw, userId]);

  // 비밀번호 유효성검사
  useEffect(() => {
    if (pw === doublePw && checkValidPw(pw) && checkValidPw(doublePw))
      setIsValidPw(true);
    else setIsValidPw(false);
  }, [pw, doublePw]);

  return (
    <ColBox>
      <JoinComponent
        userId={userId}
        onChangeUserId={onChangeUserId}
        pw={pw}
        onChangePw={onChangePw}
        doublePw={doublePw}
        onChangeDoublePw={onChangeDoublePw}
        onClickCancelBtn={onClickCancelBtn}
        isValidUserId={isValidUserId}
        isValidPw={isValidPw}
        isJoinConfirm={isJoinConfirm}
        onClickCheckUserIdBtn={onClickCheckUserIdBtn}
        onClickJoinBtn={onClickJoinBtn}
      />
    </ColBox>
  );
};

export default JoinPage;
