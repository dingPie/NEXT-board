import { ChangeEvent, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

import { ColBox, RowBox } from "../css_components/FlexBox";
import Text from "../css_components/Text";
import {
  checkValidPw,
  checkValidUserId,
  pwReg,
  userIdReg,
} from "../../utils/service/login_service";
import { setLocalStorage } from "../../utils/service/local_service";
import axios from "axios";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { JoinInputType, LoginInputType } from "../../utils/types";
import { boxShadow } from "../../styles/styleCss";

const Join = () => {
  const router = useRouter();
  const [isValidUserId, setIsValidUserId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isJoinConfirm, setIsJoinConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<JoinInputType>({ mode: "onChange" });

  const userIdWatch = watch("userId");
  const pwWatch = watch("pw");
  const doublePwWatch = watch("doublePw");

  const onClickCancelBtn = () => router.push("/login");

  const onClickJoinBtn = handleSubmit(async (inputValue: LoginInputType) => {
    const { userId, pw } = inputValue;
    const body = {
      userId: userId,
      pw: pw,
    };
    await axios.post("/api/login/join", body);

    setLocalStorage("uid", userId);
    router.push("/posts");
  });

  const onClickCheckDuplicateId = async (userId: string) => {
    const params = { userId: userId };
    const res = await axios.get("/api/login/duplicateId", { params });
    setIsValidUserId(res.data);
  };

  // 아이디 유효성 초기화
  useEffect(() => {
    setIsValidUserId(false);
    console.log(userIdWatch);
  }, [userIdWatch]);

  // 가입 가능여부 disabled 상태 추적
  useEffect(() => {
    if (isValidUserId && isValidPw) setIsJoinConfirm(true);
    else setIsJoinConfirm(false);
  }, [isValidPw, userIdWatch]);

  // 비밀번호 유효성검사
  useEffect(() => {
    if (
      pwWatch === doublePwWatch &&
      checkValidPw(pwWatch) &&
      checkValidPw(doublePwWatch)
    )
      setIsValidPw(true);
    else setIsValidPw(false);
  }, [pwWatch, doublePwWatch]);

  return (
    <>
      <ColBox padding="1rem">
        <Text fontSize="2x" bold>
          JOIN
        </Text>

        <ColBox padding="1rem 0">
          <Text fontSize="l" bold>
            아이디
          </Text>
          <RowBox alignCenter>
            <TextField
              {...register("userId", { pattern: userIdReg, required: true })}
              placeholder="6자 이상, 영어 및 숫자 포함 "
              variant="outlined"
              fullWidth
              size="small"
              style={{ boxShadow: boxShadow }}
            />
            <Button
              onClick={() => onClickCheckDuplicateId(userIdWatch)}
              disabled={!checkValidUserId(userIdWatch)}
              style={{ width: "8rem" }}
              variant="contained"
              color="primary"
            >
              중복 확인
            </Button>
          </RowBox>
          <Text padding=".5rem 0">
            {!userIdWatch?.length
              ? ""
              : isValidUserId
              ? "사용 가능한 아이디입니다."
              : "아이디 확인이 필요합니다.."}
          </Text>
        </ColBox>

        <ColBox padding="1rem 0">
          <Text fontSize="l" bold>
            비밀번호
          </Text>

          <TextField
            type={"password"}
            {...register("pw", { pattern: pwReg, required: true })}
            variant="outlined"
            fullWidth
            size="small"
            style={{ boxShadow: boxShadow }}
          />
        </ColBox>

        <ColBox padding=".25rem 0">
          <Text fontSize="l" bold>
            비밀번호 확인
          </Text>
          <TextField
            type={"password"}
            {...register("doublePw", { pattern: pwReg, required: true })}
            variant="outlined"
            fullWidth
            size="small"
            style={{ boxShadow: boxShadow }}
          />
          <Text padding=".5rem 0">
            {isValidPw
              ? "비밀번호가 일치합니다"
              : "비밀번호가 일치하지 않습니다."}
          </Text>
        </ColBox>

        <RowBox padding=".5rem 0">
          <Button
            onClick={onClickCancelBtn}
            variant="contained"
            color="primary"
          >
            취소
          </Button>
          <Button
            onClick={onClickJoinBtn}
            disabled={!isJoinConfirm}
            variant="contained"
            color="primary"
          >
            회원가입
          </Button>
        </RowBox>
      </ColBox>
    </>
  );
};

export default Join;
