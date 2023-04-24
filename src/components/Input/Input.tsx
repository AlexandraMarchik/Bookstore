import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

type InputProps = {
  value: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  errorText?: string;
  type: string;
  inputClassName?: string;
  onBlur?: () => void
};
const Input: FC<InputProps> = ({
  type,
  value,
  title,
  placeholder,
  disabled,
  errorText,
  onChange,
  inputClassName,
  onKeyDown,
    onBlur
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeText}
        onBlur={onBlur}
        disabled={disabled}
        onKeyDown={onKeyDown}
        className={classNames(styles.input,inputClassName,{
          [styles.disabled]: disabled,
          [styles.valid]: errorText,
        })}
      />
      {errorText && <div className={styles.validText}>{errorText}</div>}
    </div>
  );
};

export default Input;
