import { FiberManualRecord } from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack clone</h2>
          <h3>
            <FiberManualRecord />
            Shin Code
          </h3>
          <CreateIcon />
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
