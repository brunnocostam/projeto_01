import { Button } from './Button';
import { CheckBox } from './CheckBox';
import style from './Task.module.css'

interface TaskProps {
    id: string;
    title: string;
    isDone: boolean;
    onDelete:(id: string) => void;
    onToggle:(id: string) => void;
}

export function Task( {id, title, isDone, onDelete, onToggle}: TaskProps ) {

    return(
        <div className={style.fullContainer}>
            <article className={style.singleTaskContainer}>
                <div className={style.checkButton}>
                    {isDone === true
                    ?   <CheckBox type={'check'} onClick={() => onToggle(id)} />
                    :   <CheckBox type={'unchecked'} onClick={() => onToggle(id)}/>}
                </div>
                {isDone === false ?
                    <div className={style.titleNormal}>
                        <p>{title}</p>
                    </div>
                :
                    <div className={style.titleDone}>
                        <p><s>{title}</s></p>
                    </div>
                    }
                <div className={style.trashButton}>
                    <Button buttonType='trash' onClick={() => onDelete(id)}/>
                </div>
            </article>
        </div>
    )
}