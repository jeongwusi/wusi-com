import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
            sizes="100dvw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <span className={styles.mainCopy}>지금 일어나고 있는 일</span>
          <span className={styles.subCopy}>지금 가입하세요.</span>
          <Link href="/i/flow/signup" className={styles.joinButton}>
            계정 만들기
          </Link>
          <span className={styles.loginCopy}>이미 가입하셨나요?</span>
          <Link href="/login" className={styles.loginButton}>
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
