import { RowBox } from './styled_components/FlexBox';
import styled from 'styled-components';
import Text from './styled_components/Text';

const Header = () => {
  return (
    <>
      <RowBox justifyBetween>
        <Text fontSize="2x" bold>
          NEXT Board
        </Text>
        <Text bold>로그인</Text>
      </RowBox>
    </>
  );
};

export default Header;
