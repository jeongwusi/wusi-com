import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import close from "../../../../../../../public/close.svg";
import logo from "../../../../../../../public/logo.svg";

const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.closeButton}>
            <Image src={close} alt="close_button" width={25} height={25} />
          </div>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>
          <div></div>
        </div>
        <div className={styles.mainCopyContainer}>
          <span>아이디와 비밀번호를 입력하세요</span>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.entryArea}>
            <input className={styles.input} type="text" required />
            <div className={styles.labelLine}>아이디</div>
          </div>
          <div className={styles.entryArea}>
            <input className={styles.input} type="text" required />
            <div className={styles.labelLine}>비밀번호</div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/login" className={styles.loginButton}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
