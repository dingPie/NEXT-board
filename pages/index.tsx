import { Button } from '@mui/material';
import { NextPage } from 'next';
import styled from 'styled-components';

const Index: NextPage = () => {
  return (
    <>
      <h1>여긴 인덱스 페이지입니다</h1>
      <Button variant="contained"> MUI 버튼 </Button>
      <CustomBtn> styled compoents 버튼</CustomBtn>
    </>
  );
};

export default Index;

const CustomBtn = styled.button`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 0.5rem;
`;
