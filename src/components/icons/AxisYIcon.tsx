import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const AxisYIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8.5" cy="9.5" r="1.5"/><path d="M8 4h1v5H8zm-1.6 6.9l-2.3 2.3.7.7 2.3-2.3c-.3-.2-.5-.4-.7-.7zM10.9 9c.1.2.1.3.1.5s0 .3-.1.5H14V9h-3.1zM5.6 2H4.4l-.6 1.4L3.2 2H2l1.3 2.4V6h1V4.4z"/><path d="M10.6 5L8.5 2.9 6.4 5z"/>
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
