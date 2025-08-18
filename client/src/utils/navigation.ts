import type { NavigateFunction } from "react-router-dom";

type SetIndexFunction = (index: number) => void;

export function handleNavigationChange(
  newIndex: number,
  setIndex: SetIndexFunction,
  navigate: NavigateFunction
) {
  setIndex(newIndex);

  if (newIndex === 0) {
    navigate("/");
  } else if (newIndex === 1) {
    navigate("/messages");
  } else if (newIndex === 2) {
    navigate("/friends");
  } else if (newIndex === 3) {
    navigate("/groups");
  } else if (newIndex === 4) {
    navigate("/settings");
  }
}

export function setIndexByPathname(
  pathname: string,
  setIndex: SetIndexFunction
) {
  if (pathname === "/") {
    setIndex(0);
  } else if (pathname === "/messages") {
    setIndex(1);
  } else if (pathname === "/friends") {
    setIndex(2);
  } else if (pathname === "/groups") {
    setIndex(3);
  } else if (pathname === "/settings") {
    setIndex(4);
  }
}
