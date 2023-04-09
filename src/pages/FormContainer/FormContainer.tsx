import React, {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";

import {RoutesList} from "src/pages/Router";
import {BackArrowIcon} from "src/assets/icon";
import Title from "src/components/Title";
import styles from  './FormContainer.module.scss'

type FormPContainerProps= {
    title: string,
}
const FormContainer:FC<FormPContainerProps> =({title})=>{
    return <div>
        <NavLink to={RoutesList.Home} className={styles.icon}>
            <BackArrowIcon />
        </NavLink>
        <Title title={ title}/>
    </div>
}

export default FormContainer