import React from "react";

export default function StyledButton({ className, buttonLabel }) {
  return <button className={className}>{buttonLabel}</button>;
}
