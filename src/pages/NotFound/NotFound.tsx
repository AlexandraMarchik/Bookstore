import React from "react";

import styles from './NotFound.module.scss'

const NotFound =()=>{
    return <div className={styles.container}>
        <div className={styles.codeError}> 404 </div>
        <div className={styles.textNotFound}> Not Found </div>
        <div className={styles.textError}> The requested URL was not found on this server</div>
    </div>
}

export default NotFound