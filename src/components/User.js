import React from "react";
import LayoutWrapper from ".";
import SelectUser from "./userSelection";
import ActiveCards from "./users/activCards";
import HistoryTabs from "./users/Tabs";

function User() {
  return <LayoutWrapper>
    {/* <h2>Dashboard</h2> */}
    <ActiveCards />
    <HistoryTabs /> 
    {/* <div style={{
        position: 'absolute',
        bottom: 0,
    }}>
        <SelectUser />
    </div> */}
  </LayoutWrapper>;
}

export default User;
