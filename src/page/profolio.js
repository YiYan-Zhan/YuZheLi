import React, { useState } from "react";
import Header from "../component/header";
import "animate.css";
function Profolio() {
    const taco = [1, 2, 3, 4];
    const gp = [1, 2];
    const dog = [1, 2, 3, 4];
    const tacoDesign = [1, 2, 3];
    const [currentPosition, setCurrentPosition] = useState(0);
    return (
        <>
            <Header position="profolio" />
            <>
                <div
                    className="background"
                    style={{
                        background:
                            "url('/image/banner2.jpg') center center no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="profolio">
                        <button
                            onClick={() => {
                                setCurrentPosition(0);
                            }}
                            className={currentPosition === 0 && "active"}
                        >
                            Mr.Taco
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPosition(1);
                            }}
                            className={currentPosition === 1 && "active"}
                        >
                            犬倚
                        </button>
                        {currentPosition === 0 && (
                            <div className="taco animate__animated animate__fadeIn">
                                <h1>桃園地景藝術節 2016</h1>
                                <h2>設計圖</h2>
                                <div className="taco-photos section">
                                    {tacoDesign.map((i, index) => {
                                        return (
                                            <>
                                                <figure
                                                    className=""
                                                    key={index}
                                                >
                                                    <img
                                                        src={`/image/profolio/章魚${i}.png`}
                                                        alt=""
                                                    />
                                                </figure>
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="section">
                                    <h2>活動照片</h2>
                                    <div className="taco-photos">
                                        {taco.map((i, index) => {
                                            return (
                                                <>
                                                    <figure key={index}>
                                                        <img
                                                            src={`/image/profolio/t${i}.jpg`}
                                                            alt=""
                                                        />
                                                    </figure>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="word-group section">
                                    <h2>設計理念</h2>
                                    <h4>
                                        結合漁夫和海鮮的 吉祥物「Mr.TACO
                                        」,以草帽和釣竿 展現了漁港風情。
                                    </h4>
                                </div>
                                <div className="word-group section">
                                    <h2>實物展現</h2>
                                    <h4>
                                        配合桃園新屋的永安漁港舉辦「地景藝術
                                        節」創作雕像。從草圖建模、與廠商溝通
                                        ,再到當地挖沙坑、彩繪「石頭魚」,大
                                        家都非常有熱血、有耐心,熱血且充實的
                                        完成此次活動。
                                    </h4>
                                </div>
                                <div className="word-group section">
                                    <h2>白模製程</h2>
                                    <h4>
                                        材質採用了玻璃纖 維(FRP),防止雕像
                                        不會被海邊飛沙砸 到重傷。
                                    </h4>
                                </div>
                            </div>
                        )}
                        {currentPosition === 1 && (
                            <>
                                <div className="dog animate__animated animate__fadeIn">
                                    <h1>龍華科大文創系系畢業成果展</h1>
                                    <h2>海報</h2>
                                    <div className="dog-photo">
                                        {gp.map((i, index) => {
                                            return (
                                                <>
                                                    <figure key={index}>
                                                        <img
                                                            src={`/image/profolio/gp${i}.jpg`}
                                                            alt=""
                                                        />
                                                    </figure>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <h2>展場照片</h2>
                                    <div className="dog-project-photo">
                                        {dog.map((i, index) => {
                                            return (
                                                <>
                                                    <figure key={index}>
                                                        <img
                                                            src={`/image/profolio/g${i}.jpg`}
                                                            alt=""
                                                        />
                                                    </figure>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div className="word-group section">
                                        <h2>設計理念</h2>
                                        <h4>
                                            「犬倚」是一款以 連結、加強主人與
                                            寵物開心互動、相互休憩的寵物椅。
                                        </h4>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </>
        </>
    );
}

export default Profolio;
