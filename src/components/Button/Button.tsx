import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: true;
  className?: string;
  fontWeight?: "normal" | "bold";
  squared?: boolean;
}

const ButtonWrapper = styled.button<ButtonProps>`
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  font-family: "Cairo", sans-serif;
  width: ${(props) => (props.squared ? "fit-content" : "100%")};
  font-weight: ${(props) => (props.fontWeight === "bold" ? 500 : "normal")};
  ${(props) => {
    if (props.variant === "primary") {
      return `
            color: #ffffff;
            background: #e30613;
            &:hover {
            background: #ec4651;
            }
        `;
    } else if (props.variant === "secondary") {
      return `
            color: #e30613;
            background: #ffffff;
            &:hover {
            background: #f0f0f0;
            }
        `;
    }
  }}
  ${(props) => {
    if (props.size === "small") {
      return `
            padding: 0.25rem 0.5rem;
            font-size: 1rem;
            width: fit-content;
           
        `;
    } else if (props.size === "large") {
      return `
            padding: 0.75rem 1.5rem;
            font-size: 1.25rem;
        `;
    } else {
      return `
      padding: 0.25rem 0.5rem;
      font-size: .8rem;
        `;
    }
  }}
    ${(props) => {
    if (props.disabled) {
      return `
            cursor: not-allowed;
            opacity: 0.5;
        `;
    }
  }}
`;

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={props.onClick}
      htmlType={props.htmlType}
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      className={props.className}
    >
      {props.icon && <span>{props.icon}</span>}
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
