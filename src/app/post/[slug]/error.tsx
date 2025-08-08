"use client"

import Link from "next/link";
import styles from "./error.module.scss"

const Error = () => {
  return (
    <main className={styles.error}>
      <h1>Ooops, essa página não existe!</h1>
      <Link href="/">Voltar para a Home</Link>
    </main>
  );
};

export default Error;
