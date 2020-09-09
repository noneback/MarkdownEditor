import React from 'react';
import { Switch } from 'antd';
import Label from '../styles/Label'
import LeftSpan from '../styles/LeftSpan'

const CustomizedSwitch = ({ label, changed, defaultState,openHint,closeHint }) => {
  return (
    <>
      <div>
        <Label>{label}</Label>
        <LeftSpan>
          <Switch
            checkedChildren={openHint}
            unCheckedChildren={closeHint}
            onChange={changed}
            defaultChecked={defaultState}
            size="small"
          />
        </LeftSpan>
      </div>
    </>
  );
};

export default CustomizedSwitch;
