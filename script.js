function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const type = document.getElementById("conversionType").value;
  let result;

  if (isNaN(value)) {
    result = "Please enter a valid number.";
  } else {
    switch (type) {
      case "cToF":
        result = `${value}°C = ${(value * 9 / 5 + 32).toFixed(2)}°F`;
        break;
      case "fToC":
        result = `${value}°F = ${((value - 32) * 5 / 9).toFixed(2)}°C`;
        break;
      case "kmToMiles":
        result = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
        break;
      case "milesToKm":
        result = `${value} miles = ${(value / 0.621371).toFixed(2)} km`;
        break;
      case "kgToPounds":
        result = `${value} kg = ${(value * 2.20462).toFixed(2)} pounds`;
        break;
      case "poundsToKg":
        result = `${value} pounds = ${(value / 2.20462).toFixed(2)} kg`;
        break;
      default:
        result = "Invalid conversion type.";
    }
  }

  document.getElementById("result").innerText = result;
}
