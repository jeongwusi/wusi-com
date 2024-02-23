import styles from "./page.module.css";

type LayoutProps = { children: React.ReactNode; modal: React.ReactNode };

export default function Layout({ children, modal }: Readonly<LayoutProps>) {
  return (
    <main className={styles.container}>
      {children}
      {modal}
    </main>
  );
}
