import { ChangeEvent } from 'react';
import { Button } from '@mui/material';
import InputPw from '../../components/hooks_components/InputPw';
import InputText from '../../components/hooks_components/InputText';
import { ColBox, RowBox } from '../../components/styled_components/FlexBox';
import Text from '../../components/styled_components/Text';

interface ILoginComponent {
  email: string;
  onChangeEmail: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  pw: string;
  onChangePw: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickJoinBtn: () => void;
}

const LoginComponent = ({
  email,
  onChangeEmail,
  pw,
  onChangePw,
  onClickJoinBtn,
}: ILoginComponent) => {
  return (
    <>
      <ColBox padding="0 1rem">
        <Text fontSize="2x" bold>
          LOGIN
        </Text>

        <ColBox>
          <Text fontSize="l" bold>
            아이디
          </Text>
          <InputText value={email} onChange={onChangeEmail} radius={0.25} />
        </ColBox>

        <ColBox>
          <Text fontSize="l" bold>
            비밀번호
          </Text>
          <InputPw value={pw} onChange={onChangePw} radius={0.25} />
        </ColBox>

        <RowBox>
          <Button variant="contained" color="primary">
            로그인
          </Button>
          <Button variant="contained" color="info" onClick={onClickJoinBtn}>
            회원가입
          </Button>
        </RowBox>
      </ColBox>
    </>
  );
};

export default LoginComponent;
