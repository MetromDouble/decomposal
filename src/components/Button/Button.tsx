import styled from 'styled-components';

import { Sizes } from 'src/common/types/Sizes';
import { InteractiveContextTypes } from 'src/common/types/InteractiveContextTypes';
import { buttonSizeMap, buttonColorMap } from 'src/common/theme';

interface IButtonProps {
  type?: InteractiveContextTypes;
  size?: Sizes;
}

export const Button = styled.button<IButtonProps>`
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  outline: none;
  padding: 0 ${props => {
    const sizeObject = props.size && buttonSizeMap[props.size];

    return sizeObject
      ? sizeObject.paddingHorizontal
      : buttonSizeMap.m.paddingHorizontal
  }};
  font: inherit;
  font-size: ${props => {
    const sizeObject = props.size && buttonSizeMap[props.size];

    return sizeObject
      ? sizeObject.fontSize
      : buttonSizeMap.m.fontSize
  }};
  line-height: ${props => {
    const sizeObject = props.size && buttonSizeMap[props.size];

    return sizeObject
      ? sizeObject.fontSize
      : buttonSizeMap.m.fontSize
  }};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: color .1s ease-out, background-color .1s ease-out, border-color .1s ease-out, transform .1s ease-out;
  height: ${props => {
    const sizeObject = props.size && buttonSizeMap[props.size];

    return sizeObject
      ? sizeObject.height
      : buttonSizeMap.m.height
  }};
  color: ${props => {
    const subMap = props.type && buttonColorMap[props.type];

    return subMap
      ? subMap.default.color
      : ''
  }};
  background-color: ${props => {
    const subMap = props.type && buttonColorMap[props.type];

    return subMap
      ? subMap.default.background
      : 'transparent'
  }};
  border-color: ${props => {
    const subMap = props.type && buttonColorMap[props.type];

    return subMap
      ? subMap.default.border
      : 'transparent'
  }};

  &:focus, &:hover {
    color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.hover.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.hover.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.hover.border
        : 'transparent'
    }};
  }

  &:active {
    color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.active.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.active.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.active.border
        : 'transparent'
    }};
  }

  &:disabled {
    color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.disabled.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.disabled.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && buttonColorMap[props.type];

      return subMap
        ? subMap.disabled.border
        : 'transparent'
    }};
  }
`;
