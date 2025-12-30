// src/store/types.ts

// Redux store에 저장되는 모든 데이터를 정의하는 마스터 설계도
// Redux는 모든 전역 상태를 단 하나의 큰 객체인 RootState 안에 저장한다.
export interface RootState {
    userInfo: UserInfo | null;
    logoutTimer: NodeJS.Timeout | null; // 자동 로그아웃 타이머의 ID를 저장
    token: string | null;
    commonCodes: CommonCodeGroupResponse | null; // 공통코드 전역 상태
    notiList: responseNotificationsType[]; // 알림 목록
    notiUnreadCount: number; // 안읽은 알림 수
    getNotiData: boolean; // 알림 데이터를 요청했는지 유무
 }