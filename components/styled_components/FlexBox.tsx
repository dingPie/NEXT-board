import React from 'react';
import styled, { css } from 'styled-components';
import { fontSizeSet, IFlexLayout, setFlexLayout } from '../../styles/styleCss';

interface IFlexBox extends IFlexLayout {
  // center?: boolean;
  // right?: boolean;
  // between?: boolean;
  // align?: string;
  gap?: number;
  padding?: string;
  width?: number;
  shadow?: boolean;
  radius?: number;
  height?: number;
  bgColor?: string;
  size?: string;
}

export const RowBox = styled.div<IFlexBox>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => (gap ? gap + 'rem' : '1.5rem')};

  width: ${({ width }) => (width ? width + 'rem' : '100%')};
  height: ${({ height }) => (height ? height + 'rem' : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '.75rem 0')};

  background: ${({ bgColor }) => bgColor && bgColor};
  border-radius: ${({ radius }) => radius && radius + 'rem'};
  ${({ shadow }) => {
    return (
      shadow &&
      'box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.05)'
    );
  }};

  ${fontSizeSet};
  ${setFlexLayout};
`;

export const ColBox = styled.div<IFlexBox>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap + 'rem' : '.5rem')};

  width: ${({ width }) => (width ? width + 'rem' : '100%')};
  height: ${({ height }) => (height ? height + 'rem' : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '.75rem 0')};

  background: ${({ bgColor }) => bgColor && bgColor};
  border-radius: ${({ radius }) => radius && radius + 'rem'};

  ${({ shadow }) => {
    return (
      shadow &&
      'box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.05)'
    );
  }};

  ${setFlexLayout};
  ${fontSizeSet};
`;
