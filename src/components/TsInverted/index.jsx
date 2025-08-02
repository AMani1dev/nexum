import styles from "./index.module.css";

import clsx from "clsx";

export default function TsInverted(props) {
  return (
    <div
    className = {
      clsx(
        styles["inverted__top-bottom"] ,
        "container" , "rounded-4" , "mx-auto" ,"position-relative" ,
      )
    }
    >
      <Top content={props.topText} />
      <Bottom content={props.bottomText} />
    </div>
  );
}

function Top({content}) {
  return (
    <div
    className = {
      clsx(
        styles["top-e__wrapper"] ,
        "py-2" , "px-3" ,"position-absolute", "top-0" ,"start-50" ,"translate-middle"
      )
    }
    >
      <div className = { clsx( styles.child , "py-2", "px-3")}> 
        {content}
      </div>

    </div>
  );
}

function Bottom({content}) {
  return (
    <div
    className = {
      clsx(
        styles["bottom-e__wrapper"] ,
        "position-absolute" ,"bottom-0" ,"end-0" , "py-2" ,"px-3"
      )
    }
    >
      <div className = { clsx(styles.child , "py-2" , "px-3")} >
        {content}
      </div>
    </div>
  );
}
