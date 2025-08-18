import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import handleNavigationChange from "../utils/navigation";

import setIndexByPathname from "../utils/location";

import NavigationBar from "../components/NavigationBar";

import { PersonOutlined, SendOutlined } from "@mui/icons-material";

import type { User } from "../types/user";

import type { Message } from "../types/message";

type Conversation = {
  author: User;
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
      author: {
        name: "Alan",
        lastName: "Turing",
        username: "alan_turing",
        status: "online",
      },
      messages: [
        {
          content: "Hello! I'm Alan Turing!",
          date: new Date("2024-08-15T10:58:00Z"),
          type: "received",
        },
        {
          content: "How are you?",
          date: new Date("2024-08-15T10:59:00Z"),
          type: "received",
        },
        {
          content: "OMG",
          date: new Date("2024-08-15T15:02:00Z"),
          type: "sent",
        },
      ],
    },
    {
      author: {
        name: "Linus",
        lastName: "Torvalds",
        username: "linus_torvalds",
        status: "online",
      },
      messages: [
        {
          content: "F*ck NVIDIA!",
          date: new Date("2024-08-15T00:09:00Z"),
          type: "received",
        },
        {
          content: "Based",
          date: new Date("2024-08-15T08:09:00Z"),
          type: "sent",
        },
      ],
    },
  ];

  const filteredConversations = conversations.filter((c) => {
    const lastMessage = c.messages[c.messages.length - 1]?.content || "";

    return (
      c.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    setIndexByPathname(location.pathname, setIndex);
  }, [location.pathname]);

  const onChange = (_: any, newIndex: number) =>
    handleNavigationChange(newIndex, setIndex, navigate);

  const [messageContent, setMessageContent] = useState("");

  const sendMessage = async () => {
    if (messageContent.trim() == "") {
      return;
    }

    selectedConversation?.messages.push({
      content: messageContent,
      date: new Date(),
      type: "sent",
    });

    setMessageContent("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (messageContent.trim() !== "") {
        sendMessage();
      }
    }
  };

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
                  key={`${c.author.username}-${idx}`}
                  onClick={() => setSelectedConversation(c)}
                  sx={{
                    cursor: "pointer",
                    transition: "background-color 0.25s ease-in-out",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PersonOutlined
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#a3a3a3",
                      }}
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
                        {c.author.name} {c.author.lastName}
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {selectedConversation.messages.map((m: Message, i) => (
                  <ListItem
                    key={i}
                    alignItems="flex-start"
                    sx={{
                      alignSelf: m.type === "sent" ? "flex-end" : "flex-start",
                      boxSizing: "border-box",
                      backgroundColor:
                        m.type === "sent" ? "#dbeafe" : "#f5f5f5",
                      margin: "8px",
                      width: "max-content",
                      borderRadius: "5px",
                      display: "flex",
                      gap: "32px",
                      alignItems: "end",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <ListItemText
                        sx={{ display: "flex", alignItems: "end" }}
                        secondary={
                          <Typography sx={{ color: "#a3a3a3" }}>
                            {m.content}
                          </Typography>
                        }
                      />
                    </Box>

                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "0.75rem",
                        userSelect: "none",
                        color: "#a3a3a3",
                      }}
                    >
                      {m.date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                  </ListItem>
                ))}
              </Box>
            )}
          </Box>

          {selectedConversation && (
            <Box sx={{ display: "flex", gap: "8px" }}>
              <TextField
                placeholder="Send message"
                sx={{ flex: "1" }}
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                onKeyDown={handleKeyDown}
                multiline
              />

              <Button variant="contained" onClick={sendMessage}>
                <SendOutlined />
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <NavigationBar index={index} onChange={onChange} />
    </Box>
  );
};

export default Messages;
