import React from 'react'
import s from './DistantWork.module.css'

const DistantWork = () => {
    return (
        <div className={s.container}>
            <div className={s.distantWrapper}>
                <div className={s.proposition}>Рассматриваю варианты удаленной работы</div>
                <div > <button className={s.button}>Нанять меня</button></div>
            </div>

        </div>
    )
};

export default DistantWork