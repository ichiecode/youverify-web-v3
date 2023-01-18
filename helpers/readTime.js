export default function (wordCount) {
  const WORDS_PER_MIN = 238
  const readTimeMins = Math.floor(wordCount / WORDS_PER_MIN)
  const secs = Math.round(((wordCount % WORDS_PER_MIN) / WORDS_PER_MIN) * 60 )
  return secs > 30 ? readTimeMins + 1 : readTimeMins
}