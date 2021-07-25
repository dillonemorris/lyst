import React, { useEffect, useState } from 'react';
import { Title } from '../styles';

type EditableProps = {
  text: string;
  placeholder: string;
  children: React.ReactNode;
  childRef: React.RefObject<HTMLInputElement>;
};

const Editable: React.FC<EditableProps> = ({ childRef, text, children, ...props }) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // TODO: when you press enter, is should turn isEditing false
  };

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...props}>
      {isEditing ? (
        <div onBlur={() => setEditing(false)} onKeyDown={e => handleKeyDown(e)}>
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <Title>{text || 'Write something...'}</Title>
        </div>
      )}
    </section>
  );
};

export default Editable;
