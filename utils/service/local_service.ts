/**
 * 로컬스토리지 값 확인
 * @param {string} key
 * @returns string | null
 */
export const getLocalStorage = (key: string) =>
  typeof window !== "undefined" && localStorage.getItem(key);

/**
 * 로컬스토리지 값 추가
 * @param {string} key
 * @param {T} value generic
 * @returns {string | null}
 */
export const setLocalStorage = <T>(key: string, value: T) =>
  typeof window !== "undefined" &&
  localStorage.setItem(key, JSON.stringify(value));

/**
 * 로컬스토리지 값 삭제
 * @param {string} key
 * @returns {string | null}
 */
export const deleteLocalStorage = (key: string) =>
  typeof window !== "undefined" && localStorage.removeItem(key);
