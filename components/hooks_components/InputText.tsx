import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import styled, { css } from 'styled-components';
import { fontSizeSet } from '../../styles/styleCss';

interface IInputTextEle {
  width?: number;
  height?: number;
  shadow?: boolean;
  maxHeight?: number;
  bold?: boolean;
  bgColor?: string;
  padding?: string;
  lineHeight?: number;
  fontSize?: string;
  radius?: number;
}

interface IInputText extends IInputTextEle {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputText = forwardRef<HTMLInputElement, IInputText>(
  (
    {
      value,
      defaultValue,
      placeholder,
      onClick,
      onChange,
      onKeyPress,

      width,
      height,
      padding,
      lineHeight,
      shadow,
      maxHeight,
      bold,
      bgColor,
      fontSize,
    },
    externalRef,
  ) => {
    // forwardRef로 넘겨준 externalRef 가 있으면, externalRef로 Ref값을 지정해준다. (focus 처리하기 위함.)
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
      externalRef,
      () => inputRef.current as HTMLInputElement,
    );

    return (
      <InputTextEle
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onClick={onClick}
        onKeyPress={onKeyPress}
        // style
        placeholder={placeholder}
        width={width}
        height={height}
        bold={bold}
        shadow={shadow}
        maxHeight={maxHeight}
        bgColor={bgColor}
        padding={padding}
        lineHeight={lineHeight}
        fontSize={fontSize}
      />
    );
  },
);

export default memo(InputText);

const InputTextEle = styled.input<IInputTextEle>`
  width: ${({ width }) => (width ? width + 'rem' : '100%')};
  height: ${({ height }) => (height ? height + 'rem' : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight + 'rem' : 'auto')};
  min-height: 1.75rem;

  font-weight: ${({ bold }) => bold && 'bold'};
  padding: ${({ padding }) => padding && padding};
  line-height: ${({ lineHeight }) =>
    lineHeight ? lineHeight + 'rem' : '1.25rem'};
  background: ${({ bgColor }) => bgColor && bgColor};

  ${fontSizeSet};
  border-radius: ${({ radius }) => radius && radius + 'rem'};

  border: none;
  outline: none;

  ${({ shadow }) => {
    return (
      shadow &&
      'box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.05)'
    );
  }};

  &::-webkit-scrollbar {
    width: 0;
  }
`;
