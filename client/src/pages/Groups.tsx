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

import { useState } from "react";

const Groups = () => {
  const [index, setIndex] = useState(1);

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
        onChange={(_, newIndex) => {
          setIndex(newIndex);
        }}
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
