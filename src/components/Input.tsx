import styles from './Input.module.css'

interface Tarefa {
    id: string;
    content: string;
}

export function Input({ id, content }: Tarefa) {
    return (
            <form className={styles.form}>
                <textarea
                    className={styles.textArea}
                    // value={content}
                    id={id}
                    placeholder="Adicione uma nova tarefa"
                />
            </form>
    )
}