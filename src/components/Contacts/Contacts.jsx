import React from 'react'
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.outer}>
            <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.header}>Contacts</div>
                <div className={s.infoContacts}>
                    <div className={s.firstBlock}>
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email'/>
                    </div>

                <div className={s.secBlock}>
                    <input  className={s.subject} type="text" placeholder='Subject'/>
                    <input className={s.message} type="text" placeholder='Message'/>
                </div>
                </div>
                <div><button className={s.button}>Send</button></div>
            </div>

        </div>
        </div>

    )
};

export default Contacts