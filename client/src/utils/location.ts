type SetIndexFunction = (index: number) => void;

const setIndexByPathname = (pathname: string, setIndex: SetIndexFunction) => {
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
};

export default setIndexByPathname;
