import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "@/theme";

import {
  HomeOutlined,
  PeopleOutlineOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  HelpCenterOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
  Person,
  CalendarTodayOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  const user = {
    name: "John Doe",
    imageUrl: "", // Set to empty string to simulate no image available
  };

  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials;
  };

  return (
    <Box
      sx={{
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: `${colors.primary[600]} !important`,
          fontSize: "18px",
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} !important`,
            height: "100vh",
            overflow: "hidden",
          },
        }}
        style={{ width: isCollapsed ? "80px" : "320px", border: 0 }}
      >
        {/* iconShape="square" */}
        <Menu rootStyles={{ backgroundColor: `${colors.primary[400]} !important`, height: "100%" }}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            rootStyles={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              fontSize: "18px",
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px" className="menu-header">
                <Typography variant="h3" color={colors.grey[100]}>
                  Revenue
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {user.imageUrl ? (
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={user.imageUrl}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                ) : (
                  <Box
                    width="100px"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ cursor: "pointer", borderRadius: "50%", backgroundColor: colors.grey[700] }}
                  >
                    <Typography variant="h2" color={colors.grey[100]}>
                      {getInitials(user.name)}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item title="Profile Form" to="/form" icon={<Person />} selected={selected} setSelected={setSelected} />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpCenterOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
