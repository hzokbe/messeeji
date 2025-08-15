import {
  HouseOutlined,
  MessageOutlined,
  PeopleOutlined,
  SendOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
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
  content: string;
};

type Conversation = {
  author: string;
  avatarSrc: string;
  messages: Message[];
};

const Messages = () => {
  const [index, setIndex] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  const navigate = useNavigate();

  const location = useLocation();

  const conversations: Conversation[] = [
    {
      author: "Alan Turing",
      avatarSrc: "static/images/avatar/alan-turing.jpg",
      messages: [
        { content: "Hello! I'm Alan Turing!" },
        { content: "How are you?" },
      ],
    },
    {
      author: "Linus Torvalds",
      avatarSrc: "static/images/avatar/linus-torvalds.jpg",
      messages: [{ content: "F*ck NVIDIA!" }],
    },
  ];

  const filteredConversations = conversations.filter((c) => {
    const lastMessage = c.messages[c.messages.length - 1]?.content || "";

    return (
      c.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
          <TextField
            sx={{ width: "100%", marginBottom: "16px" }}
            placeholder="Search messages"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <List>
            {filteredConversations.map((c: Conversation, idx) => {
              const lastMessage = c.messages[c.messages.length - 1];

              return (
                <ListItem
                  key={`${c.author}-${idx}`}
                  alignItems="flex-start"
                  onClick={() => setSelectedConversation(c)}
                  sx={{
                    cursor: "pointer",
                    transition: "background-color 0.25s ease-in-out",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={c.author} src={c.avatarSrc} />
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
                        {c.author}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: "#a3a3a3", userSelect: "none" }}>
                        {lastMessage?.content}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            padding: 2,
            overflowY: "auto",
          }}
        >
          <Box sx={{ flex: "1" }}>
            {selectedConversation && (
              <List>
                {selectedConversation.messages.map((m: Message, i) => (
                  <ListItem
                    key={i}
                    alignItems="flex-start"
                    sx={{
                      boxSizing: "border-box",
                      backgroundColor: "#f5f5f5",
                      margin: "8px",
                      width: "max-content",
                      borderRadius: "5px",
                      paddingRight: "64px",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={selectedConversation.author}
                        src={selectedConversation.avatarSrc}
                      />
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
                          {selectedConversation.author}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{ color: "#a3a3a3", userSelect: "none" }}
                        >
                          {m.content}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {selectedConversation && (
            <Box sx={{ display: "flex", gap: "8px" }}>
              <TextField placeholder="Send message" sx={{ flex: "1" }} />

              <Button variant="contained">
                <SendOutlined />
              </Button>
            </Box>
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
