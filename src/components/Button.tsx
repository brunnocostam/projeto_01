import { PlusCircle, Trash, Check, Circle } from 'feather-icons-react'
import styles from './Button.module.css'

interface ButtonType {
    buttonType: 'create' | 'trash' | 'check' | 'unchecked'
}

export function Button({ buttonType }: ButtonType) {
    if (buttonType === 'create') {
        return (
            <button type='submit' className={styles.createButton}>
                <p className={styles.createButtonText}> Criar </p>
                <span className={styles.plusIcon}>
                    <PlusCircle size={16} />
                </span>
            </button>
        )
    } else if (buttonType === 'check') {
        return (
            <button className={styles.checkButton}>
                    <Check size={16} />
            </button>
        )
    } else if (buttonType === 'unchecked') {
        return (
            <button className={styles.uncheckedButton}>
                    <Circle size={16} />
            </button>
        )
    } else {
        return (
            <button className={styles.trashButton}>
                <span className={styles.trashIcon}>
                    <Trash size={16} />
                </span>
            </button>
        )
    }
}