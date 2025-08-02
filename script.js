function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const type = document.getElementById("conversionType").value;
  let result;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  switch (type) {
    case "cToF":
      result = (value * 9/5) + 32 + " °F";
      break;
    case "fToC":
      result = (value - 32) * 5/9 + " °C";
      break;
    case "kmToMiles":
      result = value * 0.621371 + " Miles";
      break;
    case "milesToKm":
      result = value / 0.621371 + " Kilometers";
      break;
    case "kgToPounds":
      result = value * 2.20462 + " Pounds";
      break;
    case "poundsToKg":
      result = value / 2.20462 + " Kilograms";
      break;
    default:
      result = "Invalid conversion.";
  }

  document.getElementById("result").innerText = "Converted Result: " + result;
}
