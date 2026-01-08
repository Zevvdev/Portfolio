// src/domain/mandalart/pages/MandalartPage.tsx

import { MandalartGrid } from "../components/MandalartGrid";
import { useMandalart } from "../hooks/useMandalart"
import "../css/mandalart.css";

export const Mandalart = () => {

    // useMandalart 훅에서 상태와 기능 가져오기
    const { data, handleUpdateCell } = useMandalart();



    return (

        <div className="mandalart-page" >

            <div className="mandalart-header">
                <h1>Mandalart 만다라트</h1>
                <p>목표를 달성하고, 꿈을 이루세요⭐</p>
            </div>
            
            {/* <mai> = <div> 와 같은 역할 
                + 핵심 콘텐츠라는 뜻 (검색 엔진 최적화 SEO / 스크린 리더 접근성)
             */}
            <main className="mandalart-main flex mt-5 justify-center">
                {/* Grid 데이터와 Update 함수 */}
                <MandalartGrid data={data} onCellChange={handleUpdateCell} />


            </main>
        </div>
    )
}