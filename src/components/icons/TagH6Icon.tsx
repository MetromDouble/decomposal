import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagH6Icon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.915 4.458v8.046h-1.6V8.956h-2.13v3.548h-1.6V4.458h1.6V7.63h2.13V4.458h1.6zm3.925 2.899c.469 0 .865.069 1.19.208s.592.324.8.559c.208.234.357.507.448.819s.137.641.137.987c0 .312-.05.629-.15.95-.099.32-.253.614-.461.883-.208.27-.473.488-.793.657s-.702.253-1.144.253c-.901 0-1.589-.28-2.06-.838-.473-.56-.71-1.432-.71-2.62 0-.78.116-1.468.345-2.066s.557-1.101.982-1.508c.425-.408.936-.716 1.534-.924s1.26-.312 1.99-.312l.09 1.366a6.506 6.506 0 0 0-1.014.104c-.33.06-.632.162-.91.305a2.52 2.52 0 0 0-.721.553 2.066 2.066 0 0 0-.449.845c.164-.07.325-.124.48-.163s.296-.058.417-.058zm-.207 1.326a2.58 2.58 0 0 0-.507.052 1.544 1.544 0 0 0-.429.143 3.769 3.769 0 0 0-.026.48c0 .252.017.493.052.722.035.23.095.436.182.617a1.1 1.1 0 0 0 .358.436c.151.108.34.162.565.162a.822.822 0 0 0 .468-.13c.13-.086.236-.195.318-.325s.144-.272.183-.429.058-.307.058-.455c0-.407-.091-.72-.273-.942-.182-.22-.498-.331-.95-.331z"/>
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
