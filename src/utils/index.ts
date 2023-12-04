import { v4 } from 'uuid';

export const getUUID = () => v4();

export const getColorStyle = (color: string) => {
  const opacityHEX = 28; // 透明度
  // 目前只支持#101010这种格式
  if (color.indexOf('#') === 0) {
    return {
      color: color,
      backgroundColor: `${color}${opacityHEX}`,
    };
  } else {
    // 异常的就返回
    return {
      color: '#000',
      backgroundColor: `#00000028`,
    };
  }
};

export const isHexColor = (str: string): boolean => {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(str);
};

export const setOpacity = (color: string, opacity: number) => {
  if (opacity > 1) {
    throw new Error('opacity is between 0 to 1');
  }
  // calculate hex
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  if (isHexColor(color)) {
    let tempColor = color.replace('#', '');
    if (tempColor.length === 3) {
      tempColor = `${tempColor.charAt(0)}${tempColor.charAt(
        0
      )}${tempColor.charAt(1)}${tempColor.charAt(1)}${tempColor.charAt(
        2
      )}${tempColor.charAt(2)}`;
    }
    return `#${tempColor}${opacityHex}`;
  } else {
    throw new Error('invalid color');
  }
};
