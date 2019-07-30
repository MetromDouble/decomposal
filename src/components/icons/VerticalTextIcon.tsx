import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const VerticalTextIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M4.3 7.9c-.6 0-1-.4-1-1h-1c0 .6.2 1.1.7 1.5-.5.3-.7.9-.7 1.5h1c0-.6.4-1 1-1h4.1c.2.4.6.7 1.1.7s.9-.3 1.1-.8H13c.6 0 1 .4 1 1h1c0-.6-.3-1.1-.7-1.5.4-.3.7-.8.7-1.4h-1c0 .6-.4 1-1 1h-2.3c-.2-.5-.7-.8-1.2-.8s-.9.3-1.1.8H4.3z"/>
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
