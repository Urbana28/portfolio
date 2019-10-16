import React from 'react'
import s from './Footer.module.css'
import vk from '../../img/vk-logo.svg'
import facebook from '../../img/facebook-logo.svg'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.header}> Hanna Yarash </div>
                <div className={s.icons}>
                    <a href="http://vk.com">
                        <svg width='30' height='30' viewBox="0 0 511.962 511.962">
                        <path  d="M250.503,400.807h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
	s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
	c0,0,35.776-2.208,18.816-30.336c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
	c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
	c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
	c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
	c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
	c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
	c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
	c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
	C182.983,404.871,250.503,400.807,250.503,400.807L250.503,400.807z"/>
                    </svg>
                    </a>
                    <a href="http://facebook.com">
                    <svg viewBox="0 0 470.513 470.513" width='30' height='30'>
                        <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853
		c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691
		c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z"/></svg>
                </a>
                    <a href="http://github.com">
                        <svg viewBox="0 0 42.562 42.562" width='30' height='30'>
                            <path d="M33.052,20.892c3.347,0.263,6.67,0.55,9.416,1.407c-2.724-0.446-6.031-1.124-9.416-1.219
		c-1.397,2.76-4.214,4.116-8.099,4.401c0.418,0.908,1.218,1.254,1.414,2.717c0.289,2.185-0.457,5.383,0.279,6.838
		c0.354,0.697,0.93,0.715,1.318,1.312c-0.951,1.125-3.311-0.127-3.578-1.312c-0.461-2.03,0.7-5.18-0.564-6.559
		c0.09,2.217-0.522,5.326,0.095,7.307c0.243,0.777,0.946,1.08,0.754,1.781c-4.423,0.449-2.574-5.725-3.297-9.367
		c-0.668,0.047-0.375,1-0.377,1.404c-0.02,3.559,0.729,8.438-3.107,7.963c-0.111-0.746,0.517-1.004,0.754-1.686
		c0.699-2.002-0.131-4.986,0.19-7.402c-1.464,1.104,0.153,4.957-0.755,6.934c-0.521,1.136-2.206,1.631-3.482,1.123
		c0.166-0.848,1.041-0.709,1.412-1.498c0.518-1.102,0.002-2.686,0.188-4.311c-2.71,0.541-4.812-0.076-5.84-1.779
		c-0.459-0.764-0.574-1.664-1.129-2.34c-0.556-0.68-1.438-0.77-1.694-1.688c3.354-0.809,3.483,3.453,6.497,3.559
		c0.925,0.033,1.404-0.268,2.26-0.467c0.238-1.074,0.752-1.877,1.507-2.438c-3.75-0.515-6.847-1.683-8.286-4.495
		c-3.408,0.168-6.527,0.623-9.418,1.312c2.623-0.954,5.856-1.294,9.324-1.405c-0.205-1.229-1.996-0.891-3.107-0.844
		C4.246,20.232,1.643,20.489,0,20.797c2.383-0.85,5.723-0.744,8.947-0.75c-0.986-3.093-0.646-8.006,1.506-9.836
		c-0.609-1.535-0.42-4.05,0.377-5.246c2.4,0.108,3.857,1.155,5.367,2.155c1.871-0.532,3.839-0.797,6.402-0.655
		c1.078,0.062,2.201,0.543,3.013,0.467c0.797-0.072,1.676-0.969,2.448-1.31c1.009-0.446,1.86-0.614,3.015-0.657
		c0.554,1.258,0.912,3.344,0.377,4.871c2.188,1.868,2.938,6.407,1.883,10.118c3.117,0.237,6.83-0.114,9.229,0.843
		c-2.24-0.289-5.301-0.854-8.189-0.656C33.822,20.179,33.013,20.123,33.052,20.892z"/>
                        </svg>
                    </a>
                </div>
                <div className={s.footer}> © All rights reserved 2019 </div>


            </div>

        </div>
    )
};

export default Footer