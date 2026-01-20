import { useEffect, useMemo, useState } from 'react';

/**
 * Types words one-by-one: type -> pause -> delete -> next word (loop).
 */
export default function TypewriterWords({
  words,
  className = '',
  typingSpeedMs = 65,
  deletingSpeedMs = 38,
  holdMs = 900,
  startDelayMs = 200,
}) {
  const safeWords = useMemo(() => (Array.isArray(words) ? words.filter(Boolean) : []), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (safeWords.length === 0) return;

    const currentWord = safeWords[wordIndex % safeWords.length];

    const isAtEnd = !isDeleting && text === currentWord;
    const isAtStart = isDeleting && text.length === 0;

    let delay = isDeleting ? deletingSpeedMs : typingSpeedMs;
    if (isAtEnd) delay = holdMs;
    if (isAtStart) delay = Math.max(50, startDelayMs);

    const t = setTimeout(() => {
      if (isAtEnd) {
        setIsDeleting(true);
        return;
      }
      if (isAtStart) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % safeWords.length);
        return;
      }

      const next = isDeleting
        ? currentWord.slice(0, Math.max(0, text.length - 1))
        : currentWord.slice(0, Math.min(currentWord.length, text.length + 1));
      setText(next);
    }, delay);

    return () => clearTimeout(t);
  }, [safeWords, wordIndex, text, isDeleting, typingSpeedMs, deletingSpeedMs, holdMs, startDelayMs]);

  if (safeWords.length === 0) return null;

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="tw-caret" aria-hidden="true" />
    </span>
  );
}

