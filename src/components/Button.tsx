import styles from './Button.module.css'
import { PlusCircle, Trash } from 'phosphor-react'

interface ButtonType {
    buttonType: 'create' | 'trash' | 'check' | 'unchecked';
    onClick?: () => void;
    disabled?: boolean
}

export function Button({ buttonType, onClick, disabled }: ButtonType) {
    if (buttonType === 'create') {
        return (
            <button type='submit' className={styles.createButton} onClick={onClick} disabled={disabled}>
                <p className={styles.createButtonText}> Criar </p>
                <span className={styles.plusIcon}>
                    <PlusCircle size={24} />
                </span>
            </button>
        )
    } else {
        return (
            <button className={styles.trashButton} onClick={onClick}>
                <span className={styles.trashIcon}>
                    <Trash size={24} />
                </span>
            </button>
        )
    }
}