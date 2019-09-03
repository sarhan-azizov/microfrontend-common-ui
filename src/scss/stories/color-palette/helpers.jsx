import React from 'react';
import uuidv4 from 'uuid';

import styles from './color-palette.scss';

export const colorsList = [
    ['#FFF', '$c-white'],
    ['#000', '$c-black'],
    ['#222', '$c-raisin-black'],
    ['#626E70', '$c-dim-grey'],
    ['#DDD', '$c-gainsboro'],
    ['#F5F5F5', '$c-white-smoke'],
    ['#C9C7C7', '$c-pastel-gray'],
    ['#759FAF', '$c-weldon-blue'],
    ['#A8BFC9', '$c-pastel-blue'],
    ['#C3D1D8', '$c-columbia-blue'],
    ['#DFE5E9', '$c-platinum'],
    ['#0D3560', '$c-dark-midnight-blue'],
    ['#176599', '$c-lapis-lazuli'],
    ['#124A86', '$c-yale-blue'],
    ['#5592BC', '$c-silver-lake-blue'],
    ['#D9E8F3', '$c-azureish-white'],
    ['#71ABD8', '$c-iceberg'],
    ['#7193B7', '$c-air-superiority-blue'],
    ['#1173BD', '$c-french-blue'],
    ['#03A9F4', '$c-vivid-cerulean'],
    ['#81D4FA', '$c-pale-cyan'],
    ['#B3E5FC', '$c-fresh-air'],
    ['#009122', '$c-north-texas-green'],
    ['#4DAD5F', '$c-middle-green'],
    ['#83C690', '$c-dark-sea-green'],
    ['#CAE5CF', '$c-light-grey'],
    ['#6CAE11', '$c-green'],
    ['#8BC34A', '$c-dollar-bill'],
    ['#C5E1A5', '$c-light-moss-green'],
    ['#DCEDC8', '$c-tea-green'],
    ['#FFC217', '$c-mikado-yellow'],
    ['#FFEE58', '$c-maize'],
    ['#FFF176', '$c-sunny'],
    ['#FFF9C4', '$c-lemon-chiffon'],
    ['#F6921E', '$c-carrot-orange'],
    ['#FFB74D', '$c-pastel-orange'],
    ['#FFCC80', '$c-topaz'],
    ['#FFE0B2', '$c-navajo-white'],
    ['#FF671F', '$c-giants-orange'],
    ['#FF8A65', '$c-pink-orange'],
    ['#FFAB91', '$c-vivid-tangerine'],
    ['#FFCCBC', '$c-apricot'],
    ['#B61B28', '$c-upsdell-red'],
    ['#EF5350', '$c-red-orange'],
    ['#EF9A9A', '$c-light-salmon-pink'],
    ['#FFCDD2', '$c-bobble-gum'],
    ['#BA68C8', '$c-rich-lilac'],
    ['#543866', '$c-pineapple'],
    ['#C99AED', '$c-bright-ube'],
    ['#EACFFF', '$c-pale-lavender']
];

export const getPalette = palette => palette.map(([background, variable]) => (
    <tr key={uuidv4()}>
        <td>
            <i style={{ background }} className={styles.item}/>
        </td>
        <td>{background}</td>
        <td>{variable}</td>
    </tr>
));
