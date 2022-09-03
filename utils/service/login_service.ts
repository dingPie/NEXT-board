/**
 * 아이디 검사
 * 하나 이상의 영문, 하나 이상의 숫자, 6자 이상
 */
const userIdReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
export const checkValidUserId = (userId: string) => userIdReg.test(userId);

/**
 *  비밀번호 검사
 *  하나 이상의 영문, 하나 이상의 숫자, 8자 이상
 */
const pwReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const checkValidPw = (pw: string) => pwReg.test(pw);
