import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import handleNavigationChange from "../utils/navigation";

import setIndexByPathname from "../utils/location";

import NavigationBar from "../components/NavigationBar";

type Friend = {
  name: string;
  username: string;
  avatarSrc: string;
};

const Friends = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const location = useLocation();

  const friends: Friend[] = [
    {
      name: "Alan Turing",
      username: "alan_turing",
      avatarSrc: "static/images/avatar/alan-turing.jpg",
    },
    {
      name: "Linus Torvalds",
      username: "linus_torvalds",
      avatarSrc: "static/images/avatar/linus-torvalds.jpg",
    },
  ];

  useEffect(
    () => setIndexByPathname(location.pathname, setIndex),
    [location.pathname]
  );

  const onChange = (_: any, newIndex: number) =>
    handleNavigationChange(newIndex, setIndex, navigate);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        height: "100dvh",
        padding: "8px",
      }}
    >
      <List
        sx={{
          width: "100%",
        }}
      >
        {friends.map((f: Friend) => (
          <ListItem
            key={`${f.username}`}
            alignItems="flex-start"
            sx={{
              cursor: "pointer",
              transition: "background-color 0.25s ease-in-out",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemAvatar>
              <Avatar alt={f.name} src={f.avatarSrc} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: "#525252",
                    fontWeight: "bold",
                    userSelect: "none",
                  }}
                >
                  {f.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <NavigationBar index={index} onChange={onChange} />
    </Box>
  );
};

export default Friends;
