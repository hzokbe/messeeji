import {
  HouseOutlined,
  MessageOutlined,
  PeopleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import handleNavigationChange from "../utils/navigation";

const Messages = () => {
  const [index, setIndex] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIndex(0);
    } else if (location.pathname === "/messages") {
      setIndex(1);
    } else if (location.pathname === "/groups") {
      setIndex(2);
    } else if (location.pathname === "/settings") {
      setIndex(3);
    }
  }, [location.pathname]);

  const onChange = (_: any, newIndex: number) =>
    handleNavigationChange(newIndex, setIndex, navigate);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "center",
          userSelect: "none",
          fontWeight: "bolder",
          color: "#a3a3a3",
        }}
      >
        Messages
      </Typography>

      <BottomNavigation
        showLabels
        value={index}
        onChange={onChange}
        sx={{
          width: "100vw",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <BottomNavigationAction label="Home" icon={<HouseOutlined />} />

        <BottomNavigationAction label="Messages" icon={<MessageOutlined />} />

        <BottomNavigationAction label="Groups" icon={<PeopleOutlined />} />

        <BottomNavigationAction label="Settings" icon={<SettingsOutlined />} />
      </BottomNavigation>
    </Box>
  );
};

export default Messages;
