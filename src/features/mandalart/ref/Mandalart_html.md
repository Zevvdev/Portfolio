// src/components/Mandalart.jsx

import '../styles/mandalart.css';

const Mandalart = () => {
  return (
    <div className="ritz grid-container" dir="ltr">
      <table className="waffle no-grid">
        <tbody>
          {/* 1행 */}
          <tr style={{ height: '62px' }}>
            <td className="s0">수면시간<br />12-7시</td>
            <td className="s1">헬스<br />월수금</td>
            <td className="s2">바른자세</td>
            <td className="s0">긍정적<br />말투</td>
            <td className="s1">항상<br />목표를<br />생각하기</td>
            <td className="s2">고민 줄이고<br />실행하기</td>
            <td className="s0">데일리<br />루틴</td>
            <td className="s1">작은 계획<br />1주 마다</td>
            <td className="s2">항상<br />큰 계획<br />생각하기</td>
          </tr>
          {/* 2행 */}
          <tr style={{ height: '62px' }}>
            <td className="s3">삼시세끼<br />단백질 위주</td>
            <td className="s4">건강</td>
            <td className="s2">스트레칭<br />자주</td>
            <td className="s3">일희일비<br />하지 않기</td>
            <td className="s4">멘탈</td>
            <td className="s2">옳은<br />선택을 하자</td>
            <td className="s3">작은 단위로<br />계획하고<br />실천하기</td>
            <td className="s4">계획</td>
            <td className="s2">매일 다시<br />돌아보고<br />계획</td>
          </tr>
          {/* 핵심 목표 행 (5행 예시) */}
          <tr style={{ height: '62px' }}>
            <td className="s3">옷<br />잘 입기</td>
            <td className="s4">자기관리</td>
            <td className="s3">스크린타임<br />줄이기</td>
            <td className="s4">자기관리</td>
            <td className="s8">개발자로<br />자리잡기</td>
            <td className="s4">루틴</td>
            <td className="s3">하루<br />돌아보고<br />내일 계획</td>
            <td className="s4">루틴</td>
            <td className="s2">작업환경<br />집 X</td>
          </tr>
          {/* ... 나머지 행들도 동일한 방식으로 className과 <br />을 수정하여 넣으시면 됩니다. */}
        </tbody>
      </table>
    </div>
  );
};

export default Mandalart;