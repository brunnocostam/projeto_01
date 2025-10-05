import { Check, Circle } from 'phosphor-react'
import styles from './CheckBox.module.css'

interface CheckBoxType {
    type: 'check' | 'unchecked'
    onClick?: () => void;
}

export function CheckBox({ type, onClick }: CheckBoxType) {
     if (type === 'check') {
        return (
            <button className={styles.checkButton} onClick={onClick}>
                <Circle size={24} weight='fill' />
                <Check size={14} weight='bold' className={styles.checkIcon} />
            </button>
        )
    } else if (type === 'unchecked') {
        return (
            <button className={styles.uncheckedButton} onClick={onClick}>
                <Circle size={24} />
            </button>
        )
    }
}