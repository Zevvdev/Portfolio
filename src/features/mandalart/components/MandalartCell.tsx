//  src/feature/mandalart/components/MandalartCell.tsx


import type {  CellProps } from "../types/MandalartType";
import "../css/mandalart.css";



export const MandalartCell = ({
    // { text, type, row, col, onChange } = props 구조분해
    text,
    type,
    row,
    col,
    onCellChange
}: CellProps) => {
    


    return (
        // 여기서 ${type} 을 쓰려면 밑에 (e)=>onchange() 대신 return 전에 const handleChange로 먼저 선언해야 될 듯 <- 일단 해보자 어떻게 되나
        <div className={`mandalart cell-type-${type}`}> 
            <textarea
            className="cell-textarea"
            value={text}
            onChange={(e) => onCellChange(row, col, e.target.value)}
            // e = 이벤트 객체
            // e.target.value = 입력된 값

            // 스타일링은 CSS에서 처리

            placeholder={type === 'center' ? '중심목표' 
                : type === 'main' ? '주요목표' 
                : ''}
            />
        </div>
        
    );
};


export default MandalartCell;
