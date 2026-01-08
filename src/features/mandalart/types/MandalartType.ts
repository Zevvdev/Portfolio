// src/features/mandalart/utils/MandalartType.ts


// 1. 셀 역할 타입
export type CellType = "normal" | "main" | "center";


// 2. 개별 셀 구조
export interface Cell {
    text: string;
    type: CellType;
}


// 3. 2차원 배열(9x9 격자) 형태의 만다라트 구조
export type MandalartData = Cell[][];


// 4. 셀 좌표
export interface CellPosition {
    row: number;
    col: number;
}


// 5. 컴포넌트용 Cell Props 인터페이스
export interface CellProps {
    text: string;
    type: CellType;
    row: number;
    col: number;
    onCellChange: (row: number, col: number, text: string ) => void;
}



// 6. 컴포넌트 용 Grid Props 인터페이스
export interface MandalartGridProps {
    data: MandalartData;
    onCellChange: (row: number, col: number, text: string) => void;
}



