import React, {Component} from "react";
import "./style.css";
import style from "./Style.module.css";
export default class StyleComponent extends Component {
    render() {
        const styleObject = {
            backgroundColor: "black",
            color: "green",
        };
        return (
            <div>
                <p className="pColorRed">Hello Front End 70</p>
                <p className={style.pColorGreen}>Hello Front End 70</p>
                <p className={style["p-color-blue"]}>Hello Front End 70</p>
                <p style={styleObject}>Hello Front End 70</p>
                <p
                    style={{
                        backgroundColor: "black",
                        color: "green",
                    }}
                >
                    Hello Front End 70
                </p>
            </div>
        );
    }
}
