import React from "react";
import Header from "../component/header";
import "animate.css";

function Home() {
    return (
        <>
            <Header />
            <div
                className="background"
                style={{
                    background:
                        "url('/image/banner2.jpg') center center no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="animate__animated animate__fadeInDown">
                    <div className="slogans">
                        <h1 className="slogan text-shadow">
                            It does not matter how slowly you go so long as you
                            do not stop. <br />
                        </h1>
                        {/* <h2>-Andy Warhol</h2> */}
                    </div>
                    <h5 className="sub-slogan text-shadow">
                        軍旅生涯也許是人生的一個階段，但設計這2字始終在我心裡踏踏實實存在著，也是我願意朝向他－為「設計」而邁出腳步。
                    </h5>
                </div>
            </div>
        </>
    );
}

export default Home;
