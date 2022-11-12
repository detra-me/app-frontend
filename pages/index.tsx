import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MAIN_DESCRIPTION, MAIN_TITLE } from "../utils/constants/Main";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{MAIN_TITLE}</h1>

        <p className={styles.description}>{MAIN_DESCRIPTION}</p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://dashboard.detra.me/" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>Coming soon</p>
          </a>

          <a href="https://docs.detra.me" className={styles.card}>
            <h2>Docs &rarr;</h2>
            <p>Coming soon</p>
          </a>

          <a href="https://help.detra.me" className={styles.card}>
            <h2>Help &rarr;</h2>
            <p>Coming soon</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
