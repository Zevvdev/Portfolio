// src/feature/mandalart/components/MandalartGrid.tsx

import type { MandalartGridProps } from "../types/MandalartType";
import { MandalartCell } from "./MandalartCell";
import "../css/mandalart.css";



export const MandalartGrid = ({ data, onCellChange }: MandalartGridProps) => {
    return (
        <div id="mandalart" className="mandalart-grid inline-block bg-white p-4 shadow-lg">
            
            {/* 
            map(배열의 각 요소를 순회하며 새 배열 생성)
            row = 각 행의 값
            rowIndex = 행의 인덱스 
            */}
            {data.map((row, rowIndex) => (
                
                
                    // cell = 각 row 의 col 
                    row.map((cell, colIndex) => (
                        <MandalartCell
                            // 개별 셀 컴포넌트 고유 key 값
                            key={`${rowIndex}-${colIndex}`}

                            text={cell.text}
                            type={cell.type}
                            row={rowIndex}
                            col={colIndex}
                            onCellChange={onCellChange}
                        />
                    ))
            ))}
        </div> // mandalart
    );

};