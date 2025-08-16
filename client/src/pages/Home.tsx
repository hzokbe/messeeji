import { Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import handleNavigationChange from "../utils/navigation";

import setIndexByPathname from "../utils/location";

import NavigationBar from "../components/NavigationBar";

const Home = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(
    () => setIndexByPathname(location.pathname, setIndex),
    [location.pathname]
  );

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
        メッセージ
      </Typography>

      <NavigationBar index={index} onChange={onChange} />
    </Box>
  );
};

export default Home;
