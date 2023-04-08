import React, {useState} from "react";

import styles from "./BookDetails.module.scss";
import {
  BackArrowIcon,
  FacebookIcon,
  InterfaceIcon,
  InterfaceSecondIcon,
  LikeIcon,
  MoreIcon,
  TwitterIcon,
} from "src/assets/icon";
import {NavLink} from "react-router-dom";
import {RoutesList} from "src/pages/Router";
import Button from "src/components/Button";
import {ButtonType} from "src/components/Button/Button";
import Tabs from "src/components/Tabs";
import {TabsNames} from "src/utils/@globalTypes";
import Subscribe from "src/components/Subscribe";

const TABS_LIST = [
  {
    title: "Description",
    disabled: false,
    key: TabsNames.Description,
  },
  {
    title: "Reviews",
    disabled: false,
    key: TabsNames.Reviews,
  },
  {
    title: "Authors",
    disabled: false,
    key: TabsNames.Authors,
  },
];

const BookDetails = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const [showDetails, setShowDetails] = useState(false);
  const onTabClick = (key: TabsNames) => {
    setActiveTab(key);
  };
  const getCurrentList = () => {
    switch (activeTab) {
      case TabsNames.Authors:
        return [];
      case TabsNames.Reviews:
        return [];
      case TabsNames.Description:
      default:
        return [];
    }
  };
  const onShowMoreDetailsButtonClick = () => {
    return setShowDetails(!showDetails);
  };

  return (
    <div className={styles.container}>
      <NavLink to={RoutesList.Home} className={styles.icon}>
        <BackArrowIcon />
      </NavLink>
      <div className={styles.title}>{"Securing DevOps"}</div>
      <div className={styles.bookInfoContainer}>
        <div className={styles.bookContainer}>
          <img src={""}></img>
          <div className={styles.likeIcon}>
            <LikeIcon />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionInfoContainer}>
            <div className={styles.priceContainer}>
              <div className={styles.price}>{"$26.98"}</div>
              <div className={styles.rating}>{"rating"}</div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"authors"}</div>
              <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"authors"}</div>
              <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"authors"}</div>
              <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
            </div>
            {showDetails && (
              <div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"authors"}</div>
                  <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
                </div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"authors"}</div>
                  <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
                </div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"authors"}</div>
                  <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
                </div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"authors"}</div>
                  <div className={styles.aboutBookInfo}>{"Julien Vehent"} </div>
                </div>
              </div>
            )}
            <div className={styles.buttonContainer}>
              <Button
                type={ButtonType.Primary}
                onClick={onShowMoreDetailsButtonClick}
                title={"More detailse"}
                className={styles.button}
              />
               <div className={styles.interfaceIcon}>
                 {!showDetails?<InterfaceIcon/>:<InterfaceSecondIcon/>}
              </div>
            </div>
            <Button type={ButtonType.Primary} title={"add to cart"} onClick={()=>{}} className={styles.secondButton} />
            <Button type={ButtonType.Primary} title={"Preview book"} onClick={()=>{}} className={styles.thirdButton} />
          </div>
        </div>

      </div>
      <div>
        <Tabs
          activeTab={activeTab}
          tabList={TABS_LIST}
          onClick={onTabClick}
        />
      </div>
      <div className={styles.footer}>
        <div>

          <FacebookIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default BookDetails;
