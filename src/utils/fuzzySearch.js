// Lightweight, zero-dependency weighted fuzzy search with typo tolerance
export function fuzzyMatch(pattern, text) {
  if (!pattern || !text) return { matches: false, score: 0 };

  const p = pattern.toLowerCase().trim();
  const t = text.toLowerCase();

  // Exact match bonus
  if (t === p) return { matches: true, score: 100 };
  if (t.startsWith(p)) return { matches: true, score: 80 };
  if (t.includes(p)) return { matches: true, score: 60 };

  // Character-by-character fuzzy match
  let pIdx = 0;
  let tIdx = 0;
  let score = 0;
  let consecutiveMatches = 0;

  while (pIdx < p.length && tIdx < t.length) {
    if (p[pIdx] === t[tIdx]) {
      pIdx++;
      consecutiveMatches++;
      score += 5 + consecutiveMatches * 3;
    } else {
      consecutiveMatches = 0;
    }
    tIdx++;
  }

  // If all characters of pattern were found in sequence
  if (pIdx === p.length) {
    return { matches: true, score: score - (t.length - p.length) * 0.5 };
  }

  // Levenshtein / Typo tolerance for single words (distance <= 2)
  if (p.length > 3) {
    const words = t.split(/[\s\-_\/]+/);
    for (const word of words) {
      if (Math.abs(word.length - p.length) <= 2) {
        let diffs = 0;
        let minLen = Math.min(word.length, p.length);
        for (let i = 0; i < minLen; i++) {
          if (word[i] !== p[i]) diffs++;
        }
        diffs += Math.abs(word.length - p.length);
        if (diffs <= 2) {
          return { matches: true, score: 40 - diffs * 8 };
        }
      }
    }
  }

  return { matches: false, score: 0 };
}

export function searchCollection(items, query) {
  if (!query || query.trim() === '') return items;

  const results = [];

  for (const item of items) {
    let bestScore = 0;

    // 1. Check Title (Weight: 3x)
    const titleMatch = fuzzyMatch(query, item.title);
    if (titleMatch.matches) bestScore = Math.max(bestScore, titleMatch.score * 3);

    // 2. Check Subtitle / Description (Weight: 1.5x)
    if (item.subtitle) {
      const subMatch = fuzzyMatch(query, item.subtitle);
      if (subMatch.matches) bestScore = Math.max(bestScore, subMatch.score * 1.5);
    }

    // 3. Check Tech Badges / Keywords (Weight: 2x)
    if (item.tags && Array.isArray(item.tags)) {
      for (const tag of item.tags) {
        const tagMatch = fuzzyMatch(query, tag);
        if (tagMatch.matches) bestScore = Math.max(bestScore, tagMatch.score * 2.5);
      }
    }

    // 4. Check Type / Category (Weight: 1.2x)
    const typeMatch = fuzzyMatch(query, item.type);
    if (typeMatch.matches) bestScore = Math.max(bestScore, typeMatch.score * 1.2);

    if (bestScore > 0) {
      results.push({ item, score: bestScore });
    }
  }

  return results.sort((a, b) => b.score - a.score).map(r => r.item);
}
