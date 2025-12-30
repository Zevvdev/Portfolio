// src/global/store/reducer.ts

import type { RootState } from "./types";

const initState: RootState = {
    userInfo: null,
    token: null,
    logoutTimer: null,
    commonCodes: null,
    notiList: [],
    notiUnreadCount: 0,
    getNotiData: false
 };