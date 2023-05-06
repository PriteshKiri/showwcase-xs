import React, { useContext } from "react";
import { TabContext } from "../Layouts/Layout";

const Test = () => {
  const tab: any = useContext(TabContext);
  return (
    <div>
      <h1>This is a test component</h1>
      <p>{tab.tab}</p>
    </div>
  );
};

export default Test;
