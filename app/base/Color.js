'use strict';

export default {
    primary: '#03A9F4',
    textKeyBlack: '#333',
    textContentBlack: '#999',
    textHintBlack: '#C8C8C8',


    // 分割线颜色
    divideLine: '#F1F1F1',
    divideBlock: '#FAFAFA',

    backgroundShadow: 'rgba(0,0,0,0.5)',


    /*
        用rgba格式的颜色
     */
    gradientColors(start, end, step, all) {
        let s = this.hexToRgba(start);
        let e = this.hexToRgba(end);

        for (let i = 0; i < 4; i++) {
            s[i] = parseInt(s[i] + (e[i] - s[i]) * step / all);
        }
        let result = this.rgbToHex(s[0], s[1], s[2], s[3]);
        return result;
    },

    hexToRgba(hex) {
        let rgba = [];
        for (let i = 1; i < 9; i += 2) {
            rgba.push(parseInt("0x" + hex.slice(i, i + 2)));
        }
        return rgba;
    },

    rgbToHex(r, g, b, a) {
        let hex = ((r << 24) | (g << 16) | (b << 8) | a).toString(16);
        return "#" + new Array(Math.abs(hex.length - 9)).join("0") + hex;
    }

}
