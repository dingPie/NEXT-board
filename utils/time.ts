export const toPostTime = (dateTime: number) => {
  const d: Date = new Date(dateTime);
  const year = d.getFullYear().toString();
  const month =
    d.getMonth() + 1 >= 10
      ? d.getMonth() + 1
      : "0" + (d.getMonth() + 1).toString();
  const date = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate().toString();
  // const hours = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours().toString();
  const hours = d.getHours() >= 13 ? d.getHours() - 12 : d.getHours();
  const miuntes =
    d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes().toString();
  const ampm = hours >= 12 ? "pm" : "am";
  const result = `${year}년 ${month}월 ${date}일`;

  return result;
};

export const toDetailTime = (dateTime: number) => {
  const d: Date = new Date(dateTime);
  const year = d.getFullYear().toString();
  const month =
    d.getMonth() + 1 >= 10
      ? d.getMonth() + 1
      : "0" + (d.getMonth() + 1).toString();
  const date = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate().toString();
  const hours = d.getHours() >= 13 ? d.getHours() - 12 : d.getHours();
  const miuntes =
    d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes().toString();
  const ampm = hours >= 12 ? "오후" : "오전";
  const result = `${year}년 ${month}월 ${date}일 ${ampm} ${hours}시 ${miuntes}분`;

  return result;
};
