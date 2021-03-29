export default function getUsernameField(languageCode) {
  switch (languageCode) {
    case "en":
      return "Username";
    case "es":
      return "Nombre";
    default:
      return "Username";
  }
}
