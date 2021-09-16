export const renderSwitch = (param) => {
  switch (param) {
    case "USA":
      return "America";
    case "GUF":
      return "Francia";
    case "RUS":
      return "Russia";
    case "CHN":
      return "Cina";
    case "KAZ":
      return "kazakistan";
    case "UNK":
      return "Sconosciuto";

    default:
      return "";
  }
};
