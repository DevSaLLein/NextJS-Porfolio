import styles from './style.module.scss';
import  HomeIcon from '../../../public/Icons/Home.svg';

const Header = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}><HomeIcon/> <span>Sobre min</span></li>
                    <li className={styles.li}>Projects</li>
                    <li className={styles.li}>Qualificações</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;