import {
  appButtonDefaultStyle,
  appButtonSecundarytStyle,
} from "./app-button-styles";
import { Spinner } from "flowbite-react";

export default ({
  title,
  type,
  action,
  customClass,
  loading,
  submit = false,
}) => {
  // const concat = (c1: string, c2: string) : string => c1 + " " + c2;

  const decideButtonClass = () => {
    let classes = {
      primaryClass: appButtonDefaultStyle,
      secondaryClass: appButtonSecundarytStyle,
    };

    return customClass || classes[type];
  };

  const handleClick = () => !loading && action && action();

  return (
    <button
      type={submit ? "submit" : ""}
      onClick={handleClick}
      className={decideButtonClass()}
    >
      {loading && <Spinner color="warning" size="md" />}
      <span className="ml-2">{loading ? "Cargando..." : title}</span>
    </button>
  );
};
