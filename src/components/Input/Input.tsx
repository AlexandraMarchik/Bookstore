import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

type InputProps = {
  value: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
  title?: string;
  placeholder: string;
  disabled?: boolean;
  errorText?: string;
  type: string;
  inputClassName?: string;
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
        className={classNames(styles.input, inputClassName, {
          [styles.disabled]: disabled,
          [styles.valid]: errorText,
        })}
        placeholder={placeholder}
        onChange={onChangeText}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
      {errorText && <div className={styles.validText}>{errorText}</div>}
    </div>
  );
};

export default Input;
