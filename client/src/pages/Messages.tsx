import {
  HouseOutlined,
  MessageOutlined,
  PeopleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
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

import { Link } from "react-router-dom";

type Message = {
  author: string;

  content: string;

  avatarSrc: string;
};

const Messages = () => {
  const [index, setIndex] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();

  const messages: Message[] = [
    {
      author: "Alan Turing",
      content: "Hello! I'm Alan Turing!",
      avatarSrc: "static/images/avatar/alan-turing.jpg",
    },
    {
      author: "Linus Torvalds",
      content: "F*ck NVIDIA!",
      avatarSrc: "static/images/avatar/linus-torvalds.jpg",
    },
  ];

  useEffect(() => {
    setIndexByPathname(location.pathname, setIndex);
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
      <List
        sx={{
          width: "100%",
          maxWidth: 720,
          bgcolor: "background.paper",
        }}
      >
        {messages.map((m: Message) => (
          <>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  userSelect: "none",
                  fontWeight: "bolder",
                  color: "#525252",
                  marginTop: "16px",
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Alan Turing" src={m.avatarSrc} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "1.5rem", color: "#525252" }}>
                      {m.author}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "#a3a3a3" }}>
                      {m.content}
                    </Typography>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
            </Link>
          </>
        ))}
      </List>

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
