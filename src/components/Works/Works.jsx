import React from 'react'
import s from './Works.module.css'

const Works = () => {
    return (
        <div className={s.outer}>
            <div className={s.container}>
                <div className={s.worksWrapper}>
                    <div className={s.worksHeader}> Works </div>
                    <div className={s.worksBody}>
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="https://asset.mansionglobal.com/editorial/Maximizing-Your-Home-Design/assets/NTF7g62sXs/designfurnishingseclecticcollections_inbody-2560x1400.jpeg"
                                alt=""/></div>
                        </div>
                        {/*<div className={s.workInfo}>Описание</div>*/}
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="https://peopleonline.imgix.net/img/app/shopmedia/production/4/4-55-2937.jpg?w=1024&auto=format"
                                alt=""/></div>
                        </div>
                        {/*<div className={s.workInfo}>Описание</div>*/}
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="https://cdn.dribbble.com/users/1125695/screenshots/4840357/philodendron_2.gif"
                                alt=""/></div>
                        </div>
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="https://mongolian-education.com/wp-content/uploads/2019/05/US-coffee-shop-market-grows-to-45.4bn-valuation-in-2018_wrbm_large.jpg"
                                alt=""/></div>
                        </div>
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="http://sportyakutia.ru/images/1fotoposel/1/6/churap/snowboarder-jump-flight-stunt-winter.jpg"
                                alt=""/></div>
                        </div>
                        <div className={s.work}>
                            <div className={s.img}><img
                                src="https://www.banjaluka.com/wp-content/uploads/2019/06/sport.jpg"
                                alt=""/></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
};

export default Works;

{/*<div className={s.wrapperA}><a href="#"><span>LOOK!</span></a></div>*/
}