import { NextPage } from "next";
import Join from "../../components/login/Join";
import { ColBox } from "../../components/css_components/FlexBox";

const JoinPage: NextPage = () => {
  return (
    <ColBox>
      <Join />
    </ColBox>
  );
};

export default JoinPage;
