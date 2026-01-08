// src/domain/mandalart/pages/Mandalart.tsx

import { useState } from "react";
import type { MandalartData } from "../types/MandalartType";
import { createEmptyMandalart } from "../utils/mandalartHelpers";


export const useMandalart = () => {
    

    // 상태관리
    const [data, setData] = useState<MandalartData>(createEmptyMandalart());

    
    // 셀에 값을 입력하여 저장
    const handleUpdateCell = (targetRow: number, targetCol: number, text: string) : void => {

        // 기존 data 순회 -> 새로운 배열 만들기 (불변성 유지)
        // 1. 각 행 (row)을 돌면서
        const newData = data.map((row, rowIdx) =>

            // 2. 행의 각 열(col) = cell 을 돌면서
            row.map((cell, cellIdx) => {

                // 3. target 좌표와 일치하면
                if ( rowIdx === targetRow && cellIdx == targetCol) {

                    // 4. cell의 text 만 업데이트 한다.
                    return { ...cell, text};
                }

                // 5. 일치하지 않으면 return
                return cell;
            })
        );

        // 6. 완성된 newData(새 배열) 을 상태값으로 관리
        setData(newData);
    }
    
    return { data, handleUpdateCell };


}