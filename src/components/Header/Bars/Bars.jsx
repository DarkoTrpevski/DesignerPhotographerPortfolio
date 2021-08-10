import React from 'react';
// import './Bars.scss';
import { BarsContainer, BarsWrapper, Bar } from './barStyles';

const Bars = ({ onClick, navState }) => {

  return (
    <BarsContainer onClick={onClick} className={`Bars ${navState && navState.clicked ? "clicked" : ""}`}>
      <BarsWrapper className="bars-wrapper">
        <Bar className="Bar Bar-1"></Bar>
        <Bar className="Bar Bar-2"></Bar>
        <Bar className="Bar Bar-3"></Bar>
      </BarsWrapper>
    </BarsContainer>
  )
}

export default Bars