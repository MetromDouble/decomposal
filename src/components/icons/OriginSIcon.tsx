import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const OriginSIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <circle cx="8" cy="8" r="1.5"/><path d="M15 8l-2.8-2.8V7H11v2h1.2v1.8zM8 1L5.2 3.8H7V5h2V3.8h1.8zM1 8l2.8 2.8V9H5V7H3.8V5.2z"/>
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
