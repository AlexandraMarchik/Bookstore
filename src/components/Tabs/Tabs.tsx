import React, { FC, useMemo } from "react";
import styles from "./Tabs.module.scss";
import classNames from "classnames";
import { TabsProps } from "./type";
import { TabsNames } from "src/utils/@globalTypes";

const Tabs: FC<TabsProps> = ({ activeTab, onClick , tabsClassNames,tabList}) => {
  const isLoggedIn = false;


  const onTabClick = (key: TabsNames) => () => onClick(key);

  return (
    <div className={classNames(styles.container,tabsClassNames, {})}>
      {tabList.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabled]: tab.disabled,
            })}
            onClick={tab.disabled ? undefined : onTabClick(tab.key)}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};
export default Tabs;
