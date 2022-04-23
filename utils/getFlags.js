export const renderSwitch = (param) => {
  switch (param) {
    case "USA":
      return "USA";
    case "GUF":
      return "France";
    case "RUS":
      return "Russia";
    case "CHN":
      return "Cina";
    case "KAZ":
      return "kazakistan";
    case "UNK":
      return "Unknown";
    case "ITA":
      return "Italy";
    case "ISR":
      return "Israel";
    case "BRA":
      return "Brasil";
    case "JPN":
      return "Japan";
    case "PRK":
      return "North Korea";
    case "IRN":
      return "Iran";
    case "MHL":
      return "Islands Marshall";
    case "AUS":
      return "Australia";
    case "IND":
      return "India";
    case "NZL":
      return "New Zeland";
    case "KOR":
      return "South Korea";
    case "FRA":
      return "France";
    case " ":
      return "Unknown";
    case "''":
      return "Unknown";

    default:
      return null;
  }
};
