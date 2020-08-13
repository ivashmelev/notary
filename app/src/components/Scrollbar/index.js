import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


export const Scrollbar = ({ children, className }) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    className={className}
  >
    {children}
  </Scrollbars>
);