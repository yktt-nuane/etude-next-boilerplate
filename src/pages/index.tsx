import { Button, TextInput } from "@mantine/core";
import type { NextPage } from "next";
import React, { useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState<"blue" | "orange">("blue");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    if (label === "blue") {
      setLabel("orange");
    } else {
      setLabel("blue");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js boilerplate</h1>
      <TextInput
        style={{ margin: "1rem" }}
        value={value}
        onChange={onChangeValue}
      />
      <Button color={label} onClick={() => toggle()}>
        {label}
      </Button>
    </main>
  );
};

export default Home;
