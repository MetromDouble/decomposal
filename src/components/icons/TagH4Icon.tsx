import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagH4Icon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.915 4.458v8.046h-1.6V8.956h-2.13v3.548h-1.6V4.458h1.6V7.63h2.13V4.458h1.6zm5.889 0v4.835h.87v1.314h-.87v1.897h-1.599v-1.897H8.851v-1.17c.165-.338.378-.722.637-1.15a26.045 26.045 0 0 1 1.846-2.653c.347-.438.693-.83 1.04-1.176h1.43zM12.205 6.46c-.156.199-.316.411-.481.636a16.3 16.3 0 0 0-.488.709c-.16.247-.314.496-.46.747a8.735 8.735 0 0 0-.391.741h1.82V6.46z"/>
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
