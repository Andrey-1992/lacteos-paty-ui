import React from 'react';
import './MenuSelectionI.css';

interface Props {
  firstSection?: string
  secondSection?: string
}

export const MenuSelectionI: React.FC<Props> = ({firstSection, secondSection}) => {
  return (
    <div className="MenuSelectionI">
      <h2>{firstSection}</h2>
      <h2>{secondSection}</h2>
    </div>
  );
};