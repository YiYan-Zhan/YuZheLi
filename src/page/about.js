import React from "react";
import Header from "../component/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
function About() {
    return (
        <>
            <Header position="about" />
            <div
                className="background about"
                style={{
                    background:
                        "url('/image/banner2.jpg') center center no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="about-bg">
                    <div className="info">
                        <figure className="yuzhe">
                            <img
                                src="http://localhost:3000/image/yuzhe.jpg"
                                alt=""
                            />
                        </figure>
                        <h4 className="contact-info">
                            <span>
                                <FontAwesomeIcon
                                    className="font-awsome"
                                    icon={faMobile}
                                />
                            </span>
                            <span>0922-140-976</span>
                        </h4>
                        <h4 className="contact-info">
                            <span>
                                <FontAwesomeIcon
                                    className="font-awsome"
                                    icon={faEnvelope}
                                />
                            </span>
                            <span>yy85521@gmail.com</span>
                        </h4>
                    </div>
                    <div className="about-me">
                        <h5>
                            李宇哲，2018畢業於龍華科技大學文化創意與數位媒體設計系。
                            <br />
                            <br />
                            在鶯歌高職的廣告設計科，學到許多平面設計相關的技能，諸如：Photoshop、Illustrator等向量繪圖、也學習了吉祥物設計、包裝設計、絹版印刷、熱轉印……等等有關周邊、產品製作。
                            <br />
                            <br />
                            大學則就讀於龍華科大文化創意與數位媒體設計系，構思、設計產品、拍攝影片及各國著名文化史；產品設計，製作產品建模、發想功能運用。
                            專題展覽則是集大成，設計了一款與寵物共用的椅子，並在畢展上連同展場一起設計、打造。
                            <br />
                            <br />
                            畢業後決定踏上軍旅生涯，並在輔導長的舉薦下，善用所長成為一名「紀實兵」，負責記錄兄弟們的基地備戰、駐地操演，展現國軍不畏戰不懼戰，勇於接受挑戰的精神。
                            <br />
                            軍旅生涯也許是人生的一個階段，但設計這2字始終在我心裡踏踏實實存在著，也是我願意朝向他－為「設計」而邁出腳步。
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
