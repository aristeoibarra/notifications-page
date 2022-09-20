import React from "react";

interface BoxProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: BoxProps) {
  return (
    <div className="container">
      <div className="box">
        <div className="cards">{children}</div>
      </div>
    </div>
  );
}
