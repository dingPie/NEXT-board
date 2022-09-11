import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Join from "../../components/login/Join";
import { ColBox } from "../../components/css_components/FlexBox";
import useInput from "../../utils/hooks/useInput";
import { setLocalStorage } from "../../utils/service/local_service";
import { checkValidPw } from "../../utils/service/login_service";
import axios from "axios";
import { NextPage } from "next";

const JoinPage: NextPage = () => {
  const router = useRouter();
  const [userId, onChangeUserId] = useInput();
  const [pw, onChangePw] = useInput();
  const [doublePw, onChangeDoublePw] = useInput();

  const [isValidUserId, setIsValidUserId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isJoinConfirm, setIsJoinConfirm] = useState(false);

  const onClickCancelBtn = () => router.push("/login");

  const onClickJoinBtn = async (userId: string, pw: string) => {
    const body = {
      userId: userId,
      pw: pw,
    };
    await axios.post("/api/login/join", body);

    setLocalStorage("uid", userId);
    router.push("/login");
  };

  const onClickCheckDuplicateId = async (userId: string) => {
    const params = { userId: userId };
    const res = await axios.get("/api/login/duplicateId", { params });
    setIsValidUserId(res.data);
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
      <Join
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
        onClickCheckDuplicateId={onClickCheckDuplicateId}
        onClickJoinBtn={onClickJoinBtn}
      />
    </ColBox>
  );
};

export default JoinPage;
