import * as S from "./indexStyle";
import * as C from "../Components/index";

export default function Home() {
  return (
    <div>
      <S.container>
        <S.controlBar>
          <S.controlBarElement>&nbsp; 일정</S.controlBarElement>
          <S.controlBarEditButton>&nbsp; + 새 이벤트</S.controlBarEditButton>
          <S.controlBarElement>
            &nbsp; <C.MCalender></C.MCalender>{" "}
          </S.controlBarElement>
        </S.controlBar>
        <S.calender>
          <S.calenderMenu>
            <C.Time />
          </S.calenderMenu>
        </S.calender>
      </S.container>
    </div>
  );
}
