import React, { useState } from "react";

import styles from "./Subscribe.module.scss";
import { ButtonType } from "src/components/Button/Button";
import { useMediaQuery } from "react-responsive";
import Input from "src/components/Input";
import Button from "src/components/Button";

const Subscribe = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

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
      <div className={styles.inputContainer}>
        {!isMobile && (
          <Input
            value={subscribeValue}
            type={"text"}
            onChange={onSubscribeClick}
            placeholder={"Your email"}
            inputClassName={styles.input}
          />
        )}
        {isMobile && (
          <Input
            value={subscribeValue}
            type={"text"}
            onChange={onSubscribeClick}
            placeholder={"Your email"}
            inputClassName={styles.inputMobile}
          />
        )}
        <Button
          title={"Subscribe"}
          onClick={() => {}}
          type={ButtonType.Primary}
          className={styles.subButton}
        />
      </div>
    </div>
  );
};

export default Subscribe;
