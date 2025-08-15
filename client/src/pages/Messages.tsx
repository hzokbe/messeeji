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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import handleNavigationChange from "../utils/navigation";

import setIndexByPathname from "../utils/location";

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

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    setIndexByPathname(location.pathname, setIndex);
  }, [location.pathname]);

  const onChange = (_: any, newIndex: number) =>
    handleNavigationChange(newIndex, setIndex, navigate);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      <Box sx={{ display: "flex", flex: 1, width: "100%" }}>
        <Box
          sx={{
            width: "30%",
            borderRight: "1px solid #e5e5e5",
            overflowY: "auto",
            boxSizing: "border-box",
            padding: "16px",
          }}
        >
          <TextField sx={{ width: "100%" }} placeholder="Search messages" />

          <List>
            {messages.map((m: Message) => (
              <ListItem
                key={m.author}
                alignItems="flex-start"
                onClick={() => setSelectedMessage(m)}
                sx={{
                  cursor: "pointer",
                  transition: "background-color 0.25s ease-in-out",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <ListItemAvatar>
                  <Avatar alt={m.author} src={m.avatarSrc} />
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
                      {m.author}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "#a3a3a3", userSelect: "none" }}>
                      {m.content}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          {selectedMessage ? (
            <>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#525252",
                  userSelect: "none",
                  fontWeight: "bolder",
                }}
              >
                {selectedMessage.author}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#a3a3a3", userSelect: "none" }}
              >
                {selectedMessage.content}
              </Typography>
            </>
          ) : (
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
          )}
        </Box>
      </Box>

      <BottomNavigation
        showLabels
        value={index}
        onChange={onChange}
        sx={{
          width: "100%",
          borderTop: "1px solid #e0e0e0",
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
