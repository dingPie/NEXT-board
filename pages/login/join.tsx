import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JoinComponent from '../../components/login/JoinComponent';
import { ColBox } from '../../components/styled_components/FlexBox';
import useInput from '../../utils/hooks/useInput';
import {
  checkValidPw,
  checkValidUserId,
} from '../../utils/service/login_service';

const JoinPage = () => {
  const router = useRouter();
  const [userId, onChangeUserId] = useInput();
  const [pw, onChangePw] = useInput();
  const [doublePw, onChangeDoublePw] = useInput();

  const [isValidUserId, setIsValidUserId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isJoinConfirm, setIsJoinConfirm] = useState(false);

  const onClickCancelBtn = () => router.push('/login');
  const onClickJoinBtn = () => {
    router.push('/login');
  };
  const onClickCheckUserIdBtn = (userId: string) => {
    console.log(checkValidUserId(userId));
    checkValidUserId(userId) && setIsValidUserId(true);
  };

  useEffect(() => {
    setIsValidUserId(false);
  }, [userId]);

  useEffect(() => {
    if (isValidUserId && isValidPw) setIsJoinConfirm(true);
    else setIsJoinConfirm(false);
  }, [isValidPw, userId]);

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
