import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagBIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M11.658 9.821c0 .635-.107 1.165-.322 1.59-.216.425-.508.765-.876 1.02s-.805.436-1.309.544a7.8 7.8 0 0 1-1.624.162c-.465 0-.946-.026-1.444-.077-.5-.051-.993-.127-1.48-.23V2.613c.397-.068.833-.127 1.309-.178a13.23 13.23 0 0 1 1.41-.077c.795 0 1.44.083 1.94.247.498.164.89.38 1.173.646.283.266.475.564.578.892.101.329.153.657.153.986 0 .5-.122.941-.366 1.326-.243.386-.57.692-.978.918.714.261 1.2.612 1.454 1.054.255.442.382.907.382 1.394zM7.51 6.66c.532 0 .935-.116 1.207-.348.272-.233.409-.553.409-.96 0-.25-.04-.451-.12-.604-.08-.154-.187-.272-.323-.357s-.295-.142-.475-.17a3.643 3.643 0 0 0-.562-.043c-.16 0-.323.006-.493.017-.17.012-.323.029-.46.051V6.66h.817zm-.816 1.734v2.856a7.63 7.63 0 0 0 1.003.069c.238 0 .47-.02.697-.06s.428-.113.604-.22c.176-.11.32-.261.434-.46s.17-.45.17-.757c0-.51-.162-.875-.485-1.096-.324-.221-.757-.332-1.301-.332H6.694z"/>
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