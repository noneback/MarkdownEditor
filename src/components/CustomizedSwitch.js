import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';

const CustomizedSwitch = ({ label, changed, defaultState,openHint,closeHint }) => {
  const Label = styled.span`
    text-align: left;
    margin: 10 auto;
    padding: 0 0px 0px 0px;
  `;

  const LeftSpan = styled.span`
    float: right;
  `;
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
