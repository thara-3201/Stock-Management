import React from "react";
import LayoutWrapper from ".";
import SelectUser from "./userSelection";

function User() {
  return <LayoutWrapper>
    <h2>User Page</h2>
    <div style={{
        position: 'absolute',
        bottom: 0,
    }}>
        <SelectUser />
    </div>
  </LayoutWrapper>;
}

export default User;
