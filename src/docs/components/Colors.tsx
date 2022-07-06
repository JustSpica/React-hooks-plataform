import React, { HTMLAttributes } from 'react';

interface IColors {
  name: string;
  bgColor: string;
  color: string;
}

export const ColorComponent = ({ name, bgColor, color }: IColors) => {
  const styles: React.CSSProperties = {
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    fontFamily: 'Fira code, sans-serif',
  }

  return (
    <div style={styles}>
      <strong>{name}</strong>
      <span>{bgColor}</span>
    </div>
  );
}