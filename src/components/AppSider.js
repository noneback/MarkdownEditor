import React from 'react';
import { Layout } from 'antd';
import SliderMenu from './SliderMenu';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_SIDE_FOLD } from '../actions/types';
const { Sider } = Layout;

const AppSider = () => {
  const dispatcher = useDispatch();
  const config = useSelector(state => state.config);
  const theme = config.appearence.theme;
  const visible = useSelector(state => state.sider).visible;

  return (
    <Sider
      theme={theme === 'classic' ? 'light' : 'dark'}
      breakpoint="lg"
      width={"40%"}
      defaultCollapsed="true "
      collapsed={visible}
      collapsedWidth="0"
      trigger={null}
      onBreakpoint={broken => {
        dispatcher({ type: TOGGLE_SIDE_FOLD });
      }}
    >
      <SliderMenu></SliderMenu>
    </Sider>
  );
};
export default AppSider;
