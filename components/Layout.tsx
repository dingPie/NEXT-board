import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Footer from "./Footer";
import Header from "./Header";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  max-width: ${({ theme }) => theme.deviceSizes.tablet};
  margin: 0 auto;
  padding: 1rem;
`;
