import { ChangeEvent } from 'react';
import { Button } from '@mui/material';
import InputPw from '../hooks_components/InputPw';
import InputText from '../hooks_components/InputText';
import { ColBox, RowBox } from '../styled_components/FlexBox';
import Text from '../styled_components/Text';

interface IJoinPage {
  userId: string;
  pw: string;
  doublePw: string;
  onChangeUserId: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeDoublePw: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isValidUserId: boolean;
  isValidPw: boolean;
  isJoinConfirm: boolean;
  onClickCheckUserIdBtn: (userId: string) => void;
  onClickCancelBtn: () => void;
  onClickJoinBtn: () => void;
}

const JoinPage = ({
  userId,
  pw,
  doublePw,
  onChangeUserId,
  onChangePw,
  onChangeDoublePw,
  isValidUserId,
  isValidPw,
  isJoinConfirm,
  onClickCheckUserIdBtn,
  onClickCancelBtn,
  onClickJoinBtn,
}: IJoinPage) => {
  return (
    <>
      <ColBox padding="0 1rem">
        <Text fontSize="2x" bold>
          JOIN
        </Text>

        <ColBox>
          <Text fontSize="l" bold>
            아이디
          </Text>
          <RowBox alignCenter>
            <InputText
              padding=".5rem"
              shadow
              value={userId}
              onChange={onChangeUserId}
              radius={0.25}
            />
            <Button
              onClick={() => onClickCheckUserIdBtn(userId)}
              style={{ width: '8rem' }}
              variant="contained"
              color="primary"
            >
              중복 확인
            </Button>
          </RowBox>
          <Text padding=".5rem 0">
            {isValidUserId
              ? '사용 가능한 아이디입니다.'
              : '아이디 확인이 필요합니다.'}
          </Text>
        </ColBox>

        <ColBox>
          <Text fontSize="l" bold>
            비밀번호
          </Text>
          <InputPw
            padding=".5rem"
            shadow
            value={pw}
            onChange={onChangePw}
            radius={0.25}
          />
        </ColBox>

        <ColBox>
          <Text fontSize="l" bold>
            비밀번호 확인
          </Text>
          <InputPw
            padding=".5rem"
            shadow
            value={doublePw}
            onChange={onChangeDoublePw}
            radius={0.25}
          />

          <Text padding=".5rem 0">
            {isValidPw
              ? '비밀번호가 일치합니다'
              : '비밀번호가 일치하지 않습니다.'}
          </Text>
        </ColBox>

        <RowBox>
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

export default JoinPage;