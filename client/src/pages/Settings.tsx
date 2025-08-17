import { Avatar, Box, ButtonBase, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import handleNavigationChange from "../utils/navigation";

import setIndexByPathname from "../utils/location";

import NavigationBar from "../components/NavigationBar";

import type { User } from "../types/user";

const Settings = () => {
  const [index, setIndex] = useState(2);

  const navigate = useNavigate();

  const location = useLocation();

  const user: User = {
    name: "Lucas",
    lastName: "Fernandes",
    status: "online",
  };

  useEffect(
    () => setIndexByPathname(location.pathname, setIndex),
    [location.pathname]
  );

  const onChange = (_: any, newIndex: number) =>
    handleNavigationChange(newIndex, setIndex, navigate);

  const [avatarSrc, setAvatarSrc] = useState<string>(
    "static/images/avatar/me.png"
  );

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setAvatarSrc(reader.result as string);
      };

      reader.readAsDataURL(file);
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
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          gap: "8px",
        }}
      >
        <ButtonBase
          component="label"
          role={undefined}
          tabIndex={-1}
          aria-label="Avatar image"
          sx={{
            borderRadius: "10px",
            "&:has(:focus-visible)": {
              outline: "2px solid",
              outlineOffset: "2px",
            },
            margin: "8px",
            padding: "16px",
            backgroundColor: "#e5e5e5",
          }}
        >
          <Avatar
            alt="Upload new avatar"
            src={avatarSrc}
            sx={{ width: "128px", height: "128px" }}
          />

          <input
            type="file"
            accept="image/*"
            style={{
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            }}
            onChange={handleAvatarChange}
          />
        </ButtonBase>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            userSelect: "none",
            color: "#a3a3a3",
            fontWeight: "bolder",
            margin: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {user.name} {user.lastName}
          {user.status == "online" ? (
            <Typography
              variant="h4"
              component="h2"
              sx={{
                userSelect: "none",
                color: "#22c55e",
                fontWeight: "bolder",
                margin: "16px",
              }}
            >
              •
            </Typography>
          ) : (
            <Typography
              variant="h4"
              component="h2"
              sx={{
                userSelect: "none",
                color: "#dc2626",
                fontWeight: "bolder",
                margin: "16px",
              }}
            >
              •
            </Typography>
          )}
        </Typography>
      </Box>

      <NavigationBar index={index} onChange={onChange} />
    </Box>
  );
};

export default Settings;
