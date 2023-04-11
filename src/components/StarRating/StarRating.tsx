import React, { FC, useState } from "react";
import styles from "./StarRating.module.scss";
import { FaStar } from "react-icons/fa";
import classNames from "classnames";
import {LikeIcon, StarIcon} from "src/assets/icon";


type StarRatingProps = {
  className?: string;
  count: number;
  value: string;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  size?: number;
  edit?: boolean;
  isHalf?: boolean;
  onChange?: (value: number) => void;
  emptyIcon?: React.ReactElement;
  halfIcon?: React.ReactElement;
  fullIcon?: React.ReactElement;
};
const StarRating: FC<StarRatingProps> = ({
                                           className,
                                           count,
                                           value,
                                           color = "#ffd700",
                                           hoverColor = "#ffc107",
                                           activeColor = "#ffc107",
                                           size = 30,
                                           edit = false,
                                                                                    onChange,
                                           emptyIcon = <LikeIcon/>,
                                           fullIcon = <StarIcon/>
                                         }) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const handleClick = (index: number) => {
    if (!edit) {
      return;
    }
    if (onChange) {
      onChange(index + 1);
    }
  };
  const stars = [];

  for (let i = 0; i < count; i++) {
    let star: React.ReactElement;
     if ("i" < value) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }


    stars.push(
        <div
            key={i}
            style={{ cursor: "pointer" }}

            onClick={() => handleClick(i)}
        >
          {React.cloneElement(star, {
            size: size,
            color: i <= Number(hoverValue) ? hoverColor : "i "< value ? activeColor : color,
          })}
        </div>
    );
  }
  return (
    <div className={styles.container}>
        <div className={`rating ${className}`}>{stars}</div>;
    </div>
  );
};

export default StarRating;
// <div className="star-rating">
//   {[...Array(5)].map((star, index) => {
//     index += 1;
//     return (
//       <button
//         type="button"
//         key={index}
//         className={index <= rating ? "on" : "off"}
//       >
//         <div className={styles.icon}>
//           <FaStar />
//         </div>
//       </button>
//     );
//   })}
// </div>
