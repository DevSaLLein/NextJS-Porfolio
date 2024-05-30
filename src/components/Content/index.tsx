import styles from './style.module.scss';

const Content = ({children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <main className={styles.mainContainer}>
            {children}
        </main>
    )
}

export default Content;