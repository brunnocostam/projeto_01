import { useState } from 'react';
import { Button } from './Button';
import styles from './Input.module.css'

interface InputProps {
    handleNewTask: (taskTitle: string) => void
}

export function Input({ handleNewTask }: InputProps) {
    const [value, setValue] = useState('')

    const isValueEmpty = value.trim().length === 0;

    return (
            <form className={styles.form} onSubmit={(event) => {
                event.preventDefault()

                if(value.trim() === '') return

                handleNewTask(value.trim())
                setValue('')
            }}>
                <textarea
                    className={styles.textArea}
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                    value={value}
                    name='taskField'
                />
                <Button
                    buttonType='create'
                    disabled={isValueEmpty}
                    />
            </form>
    )
}