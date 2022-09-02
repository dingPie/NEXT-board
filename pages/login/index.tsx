import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginComponent from '../../components/login/LoginComponent';
import { ColBox } from '../../components/styled_components/FlexBox';
import useInput from '../../utils/hooks/useInput';

const Index: NextPage = () => {
  const router = useRouter();
  const [email, onChangeEmail] = useInput();
  const [pw, onChangePw] = useInput();

  const onClickJoinBtn = () => router.push('/login/join');

  return (
    <ColBox>
      <LoginComponent
        email={email}
        onChangeEmail={onChangeEmail}
        pw={pw}
        onChangePw={onChangePw}
        onClickJoinBtn={onClickJoinBtn}
      />
    </ColBox>
  );
};

export default Index;
