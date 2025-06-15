import React from "react";
import styles from "./page.module.scss"
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className={styles.main}>
        <p>Hello, please sign in.</p>
        <Link href="/auth">Let's go.</Link>
    </div>
    
  );
}
