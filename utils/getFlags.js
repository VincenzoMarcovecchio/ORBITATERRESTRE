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
    case "ITA":
      return "Italia";
    case "ISR":
      return "Israele";
    case "BRA":
      return "Brasile";
    case "GUF":
      return "Francia";
    case "JPN":
      return "Giappone";
    case "PRK":
      return "Nord Corea";
    case "IRN":
      return "Iran";
    case "MHL":
      return "Isole Marshall";
    case "AUS":
      return "Australia";
    case "IND":
      return "India";
    case "NZL":
      return "Nuova Zelanda";
    case "KOR":
      return "Sud Korea";

    default:
      return null;
  }
};
