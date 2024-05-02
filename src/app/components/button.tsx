'use client';
import React from 'react';
import styled from '@emotion/styled';

export type ButtonSize = 'medium' | 'small';
export type ButtonPosition = 'standalone' | 'left' | 'middle' | 'right';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonAccent = 'default' | 'blue' | 'danger';

export type ButtonProps = {
  className?: string;
  Icon?: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  position?: ButtonPosition;
  accent?: ButtonAccent;
  soon?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled.button`border: 1px solid transparent;
  /* border: 1px solid; */
  border-radius: 55px;
  display: inline-flex;
  align-items: center;
  font-weight: 900;
  /* gap: 4px; */
  height: auto;
  padding: 16px;
  white-space: nowrap;
  width: 200px;

  &:hover {
    border-color: transparent;
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
  }
`;

export const Button = ({title, className, onClick}: ButtonProps)=>(
    <StyledButton className={className} onClick={onClick}>
      {title}
    </StyledButton>
)