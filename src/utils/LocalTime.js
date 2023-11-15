export default function LocalTime(time) {
  const utcTime = "2023-11-08T03:32:00Z"; // UTC time
  const date = new Date(utcTime);
  const istTime = new Date(date.getTime() + 5.5 * 60 * 60 * 1000); // Adding 5 hours and 30 minutes in milliseconds

  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const istTimeString = istTime.toLocaleString("en-US", options);

  return istTimeString;
}
