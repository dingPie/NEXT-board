import { RowBox } from './styled_components/FlexBox';
import styled from 'styled-components';
import Text from './styled_components/Text';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { createTheme } from '@mui/material/styles';

// const muiTheme = createTheme(styledTheme);

const Header = () => {
  const router = useRouter();

  const getLocalStorage = (key: string) => localStorage.getItem(key);
  const deleteLocalStorage = (key: string) => localStorage.removeItem(key);

  const onClickLoginBtn = () => {
    if (getLocalStorage('uid')) {
      console.log('유저정보 있음');
      deleteLocalStorage('uid');
      router.push('posts');
    } else {
      console.log('유저정보 없음');
      router.push('login');
    }
  };

  return (
    <>
      <HeaderBox justifyBetween>
        <Text color="white" textShadow fontSize="2x" bold>
          NEXT.board
        </Text>
        <LoginButton variant="outlined" onClick={onClickLoginBtn}>
          로그인
        </LoginButton>
      </HeaderBox>
    </>
  );
};

export default Header;

const HeaderBox = styled(RowBox)`
  background: ${({ theme }) => theme.colors.primary_blue};
  padding: 0.75rem;
`;

const LoginButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary_blue};
  }
`;
