// src/global/store/reducer.ts

import type { AnyAction } from "redux";
import type { RootState } from "./types";


// 초기 상태 ( redux store의 기본값 - reducer 밖에 선언 )
const initState: RootState = {
    userInfo: null,
    token: null,
    logoutTimer: null,
    commonCodes: null,
    notiList: [],
    notiUnreadCount: 0,
    getNotiData: false
 };

//  reducer 함수 ( 항상 state를 return )
const reducer = (
    state: RootState = initState,
    action: AnyAction
): RootState => {
    switch (action.type) {
        // 나중에 로그인/로그아웃 관련 액션 처리 추가 예정
        default:
            return state;
    }
};

export default reducer;