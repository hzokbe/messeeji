import {
  HouseOutlined,
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

const Groups = () => {
  const [index, setIndex] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIndex(0);
    } else if (location.pathname === "/groups") {
      setIndex(1);
    } else if (location.pathname === "/settings") {
      setIndex(2);
    }
  }, [location.pathname]);

  const handleNavigationChange = (_: any, newIndex: number) => {
    setIndex(newIndex);
    if (newIndex === 0) {
      navigate("/");
    } else if (newIndex === 1) {
      navigate("/groups");
    } else if (newIndex === 2) {
      navigate("/settings");
    }
  };

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
        Groups
      </Typography>

      <BottomNavigation
        showLabels
        value={index}
        onChange={handleNavigationChange}
        sx={{
          width: "100vw",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <BottomNavigationAction label="Home" icon={<HouseOutlined />} />

        <BottomNavigationAction label="Groups" icon={<PeopleOutlined />} />

        <BottomNavigationAction label="Settings" icon={<SettingsOutlined />} />
      </BottomNavigation>
    </Box>
  );
};

export default Groups;
