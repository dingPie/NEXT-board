import styled from 'styled-components';
import { RowBox } from './styled_components/FlexBox';

const Footer = () => {
  return (
    <>
      <FooterEle>
        <div>Footer</div>
      </FooterEle>
    </>
  );
};

export default Footer;

const FooterEle = styled(RowBox)`
  position: absolute;
  bottom: 0;
  /* height: 4rem;
  position: relative;
  transform: translateY(-100%); */
`;
