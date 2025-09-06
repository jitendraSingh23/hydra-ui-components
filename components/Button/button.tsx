import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary", 
  size = "medium", 
  disabled = false,
  onClick,
  className = "",
  ...props 
}) => {
  const baseClasses = "hydra-button";
  const variantClasses = {
    primary: "hydra-button--primary",
    secondary: "hydra-button--secondary",
    outline: "hydra-button--outline",
    ghost: "hydra-button--ghost"
  };
  const sizeClasses = {
    small: "hydra-button--small",
    medium: "hydra-button--medium",
    large: "hydra-button--large"
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "hydra-button--disabled" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
