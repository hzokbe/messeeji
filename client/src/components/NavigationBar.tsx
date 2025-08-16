import {
  HouseOutlined,
  MessageOutlined,
  PeopleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

type OnChangeFunction = (_: any, newIndex: number) => void;

type NavigationBarProps = {
  index: number;
  onChange: OnChangeFunction;
};

const NavigationBar = (props: NavigationBarProps) => {
  return (
    <BottomNavigation
      showLabels
      value={props.index}
      onChange={props.onChange}
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
  );
};

export default NavigationBar;
