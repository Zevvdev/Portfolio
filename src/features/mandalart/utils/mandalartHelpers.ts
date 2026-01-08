// src/domain/mandalart/types/MandalartHelpers.ts

import type { CellType, MandalartData } from "../types/MandalartType";



// 만다라트 데이터 관련 유틸리티 함수들


// 좌표에 따른 셀 타입 반환 함수
export const getCellType = (row: number, col: number): CellType => {
    if ( row === 4 && col === 4 ) 
        return "center";

    // main 셀 : 각 3x3블록(9개) 의 중앙 셀 (1,1)
    // row, col 나누기 3 했을 때 나머지가 1인 경우
    const isBlockMain = (row % 3 === 1) && (col % 3 === 1);
    if ( isBlockMain ) 
        return "main";

    // 나머지는 normal 셀
    return "normal";
};


// 만다라트 empty template ( 9x9 )
export const createEmptyMandalart = (): MandalartData =>  {
    // 9개 행 생성
    return Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: 9 }, (_, col) => ({
            text: "",
            // 셀 타입을 좌표로 판단하는 getCellType 함수 사용
            type: getCellType(row, col)
        })
    ));
};