import React, { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import styles from "./general-layout.module.scss";

export const GeneralLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <>
      <div className={styles.menuAndContentwrapper}>{children}</div>/
    </>
  );
};

export default GeneralLayout;
