import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginComponent from '../../components/login/LoginComponent';
import useInput from '../../utils/hooks/useInput';

const Index: NextPage = () => {
  const router = useRouter();
  const [email, onChangeEmail] = useInput();
  const [pw, onChangePw] = useInput();

  const onClickJoinBtn = () => router.push('/login/join');

  return (
    <>
      <LoginComponent
        email={email}
        onChangeEmail={onChangeEmail}
        pw={pw}
        onChangePw={onChangePw}
        onClickJoinBtn={onClickJoinBtn}
      />
    </>
  );
};

export default Index;
