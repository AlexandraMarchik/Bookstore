import React, {useMemo, useState} from "react";


import styles from "./RegistrationPage.module.scss";
import { TabsNames } from "src/utils/@globalTypes";
import Tabs from "src/components/Tabs";
import SignIn from "src/components/SignIn";
import SignUp from "src/components/SignUp";

const TABS_LIST = [
      {
        title: "Sign In",
        disabled: false,
        key: TabsNames.SignIn,
      },
      {
        title: "Sign Up",
        disabled: false,
        key: TabsNames.SignUp,
      },
    ]


const RegistrationPage = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.SignIn);

  const onTabClick = (key: TabsNames) => {
    setActiveTab(key);
  };

  return (
    <div className={styles.container}>
        <div className={styles.tabsContainer} >
          <Tabs
            onClick={onTabClick}
            activeTab={activeTab}
            tabsClassNames={styles.tab}
            tabList={TABS_LIST}
          />
        </div>
        {activeTab === TabsNames.SignIn ? <SignIn /> : <SignUp/>}
    </div>
  );
};

export default RegistrationPage;
