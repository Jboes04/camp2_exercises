export default function(numberOfSeconds) {
  const minutes = Math.floor(numberOfSeconds / 60);
  const seconds = numberOfSeconds % 60;
  return `${minutes.toString()}:${seconds.toString().padStart(2, "0")}`;
}
