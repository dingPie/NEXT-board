import { NextPage } from "next";
import Login from "../../components/login/Login";
import { ColBox } from "../../components/css_components/FlexBox";

const LoginPage: NextPage = () => {
  return (
    <ColBox>
      <Login />
    </ColBox>
  );
};

export default LoginPage;
