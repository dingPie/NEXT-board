import styled from "styled-components";
import { RowBox } from "./css_components/FlexBox";
import Text from "./css_components/Text";
import { useRouter } from "next/router";
import { Avatar, Button } from "@mui/material";
import {
  deleteLocalStorage,
  getLocalStorage,
} from "../utils/service/local_service";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getLocalStorage("uid") && setIsLogin(true);
  }, [router.pathname]);

  const onClickLoginBtn = () => {
    if (isLogin) {
      deleteLocalStorage("uid");
      setIsLogin(false);
      router.push("/posts");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <HeaderBox justifyBetween>
        <Text color="white" textShadow fontSize="2x" bold>
          NEXT.board
        </Text>

        <RowBox justifyEnd padding="0">
          {isLogin && <Avatar src="/broken-image.jpg" />}
          <LoginButton variant="outlined" onClick={onClickLoginBtn}>
            {isLogin ? "로그아웃" : "로그인"}
          </LoginButton>
        </RowBox>
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
