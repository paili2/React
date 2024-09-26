// 버튼 3개 만들고, 색깔 패딩 텍스트 넣기

import { CSSProperties } from "react";

type ButtonCss = { color: string; padding: string; backgroundColor: string };
type ButtonText = { text: string; fontSize: string };
type ButtonProps = ButtonCss & ButtonText;

const Button = (props: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    color: props.color,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    fontSize: props.fontSize,
  };
  return <button style={ButtonStyle}>{props.text}</button>;
};

export default Button;
