import { useState, useEffect } from "react";
import moment from "moment";
import * as S from "./TimeStyle";

export const Time = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <S.Container>
      <S.BigText>{time.format("YYYY년 MM월 DD일")}</S.BigText>

      <S.SmallText>{time.format("HH:mm:ss")}</S.SmallText>
    </S.Container>
  );
};
