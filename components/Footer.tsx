import styled from "styled-components";
import { RowBox } from "./css_components/FlexBox";
import Text from "./css_components/Text";

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Text center color="white" bold>
          FOOTER
        </Text>
      </FooterBox>
    </>
  );
};

export default Footer;

const FooterBox = styled(RowBox)`
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary_blue};
  padding: 0.75rem;
  /* height: 4rem;
  position: relative;
  transform: translateY(-100%); */
`;
