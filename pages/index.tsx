import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button variant="outlined">Go to Dashboard</Button>
    </div>
  );
};

export default Home;
