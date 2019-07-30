import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagCanvasIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 3H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-6.934 7.551c0 .21-.027.408-.08.595s-.143.35-.266.49c-.124.14-.284.25-.48.332a1.85 1.85 0 0 1-.714.123 2.07 2.07 0 0 1-.735-.112 1.846 1.846 0 0 1-.497-.273l.33-.686c.116.075.245.147.388.217.142.07.288.105.437.105.224 0 .405-.06.543-.179.137-.119.206-.339.206-.66V8.38H3.75v-.714h2.317v2.884zm3.258 1.207c-.263.222-.664.333-1.2.333-.36 0-.646-.038-.86-.115a2.79 2.79 0 0 1-.484-.214l.252-.7c.126.075.277.144.451.21s.39.098.641.098c.145 0 .265-.015.36-.046s.172-.072.228-.126.095-.114.115-.181a.684.684 0 0 0 .032-.207.397.397 0 0 0-.077-.239c-.052-.069-.117-.13-.196-.184s-.168-.104-.266-.148-.196-.085-.295-.122c-.13-.047-.265-.1-.405-.16a1.607 1.607 0 0 1-.382-.232 1.142 1.142 0 0 1-.283-.347 1.065 1.065 0 0 1-.112-.514c0-.406.132-.723.395-.952s.627-.343 1.09-.343c.265 0 .497.03.695.091s.366.129.501.203l-.252.665a2.277 2.277 0 0 0-.388-.168 1.597 1.597 0 0 0-.493-.07c-.458 0-.687.166-.687.497 0 .084.024.158.07.22.046.063.106.12.18.168.071.05.152.093.243.13.092.037.182.072.27.105.136.051.276.109.424.171.146.064.282.148.406.252.123.106.224.237.304.393.08.156.119.353.119.59 0 .407-.132.721-.396.942zM11.5 7c-.8 0-1.5-.7-1.5-1.5S10.7 4 11.5 4s1.5.7 1.5 1.5S12.3 7 11.5 7z"/>
    </>
  );

  return onlyPath
  ? path
  : (
    <Icon size={size} {...props}>
      {path}
    </Icon>
  );
};
