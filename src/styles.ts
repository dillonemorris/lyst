import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
`;

export const Item = styled('div')`
  display: flex;
  align-items: center;
`;

export const Input = styled('input')`
  font-size: 14px;
  border: none;
  font-family: ui-monospace, monospace;
  cursor: auto;

  &:focus {
    outline: none;
    padding: 0;
  }
`;

export const Title = styled('div')`
  vertical-align: middle;
`;

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
};
