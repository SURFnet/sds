import React from "react";
import "./ColorPallet.scss";

export interface ColorPalletItem {
    name: string;
    color: string;
}


export interface ColorPalletProps {
    name: string;
    colors: Array<ColorPalletItem>;
}

const ColorPallet = (props: ColorPalletProps) => {

    return (
        <div className="sds--color-palet">
            {props.colors.map((item, index) => <div key={index} className="color">
                {/*@ts-ignore*/}
                <span className="box" style={{background: `${item.color}`}}/>
                <span className="name">{item.name}</span>
            </div>)}
        </div>
    );
};

export default ColorPallet;
