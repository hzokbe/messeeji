import type { NavigateFunction } from "react-router-dom";

type SetIndexFunction = (index: number) => void;

const handleNavigationChange = (newIndex: number, setIndex: SetIndexFunction, navigate: NavigateFunction) => {
    setIndex(newIndex);

    if (newIndex === 0) {
      navigate("/");
    } else if (newIndex === 1) {
      navigate("/messages");
    } else if (newIndex === 2) {
      navigate("/groups");
    } else if (newIndex === 3) {
      navigate("/settings");
    }
};

export default handleNavigationChange;
