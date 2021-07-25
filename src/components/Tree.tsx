import React, { useState, useRef, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import * as Icons from '../icons';
import { Frame, Content, toggle, Item, Input } from '../styles';
import Editable from './Editable';

type NativeButtonProps = React.HTMLAttributes<HTMLDivElement>;

export const Tree = React.memo<{ defaultOpen?: boolean } & NativeButtonProps>(({ children, defaultOpen = false }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('Write something...');
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];

  return (
    <Frame>
      <Item>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <Editable childRef={inputRef} text={name} placeholder="Write something...">
          <Input
            ref={inputRef}
            type="text"
            name="task"
            placeholder="Write something..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Editable>
      </Item>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}
