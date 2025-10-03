import logo from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <aside className={styles.aside}>
            <img className={styles.logo} src={logo} alt='Logo todo-app' />
        </aside>
    )
}