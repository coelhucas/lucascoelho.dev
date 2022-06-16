function getReadingTime(body: string): number {
  const wpm = 225;
  const words = body.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default getReadingTime;