import React, { useState } from "react";
import styles from "./Subscribe.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";

const Subscribe = () => {
  const [subscribeValue, setSubscribeValue] = useState("");

  const onSubscribeClick = (value: string) => {
    setSubscribeValue(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Subscribe to Newsletter</div>
      <div className={styles.text}>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </div>
      <div className={styles.inputContainer} >
        <Input
          value={subscribeValue}
          type={"text"}
          onChange={onSubscribeClick}
          placeholder={"Your email"}
          inputClassName={styles.input}
        />
        <div className={styles.button}>
          <Button
            title={"Subscribe"}
            onClick={() => {}}
            type={ButtonType.Primary}
            className={styles.buttonContainer}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
