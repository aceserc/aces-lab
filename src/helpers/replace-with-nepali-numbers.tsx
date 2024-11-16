/**
 * Replaces English numbers in a string with Nepali numbers.
 * @param {string} input - The string containing English numbers.
 * @returns {string} - The string with English numbers replaced by Nepali numbers.
 */
function replaceWithNepaliNumbers(input: string) {
  const englishToNepaliMap = {
    0: "०",
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९",
  };

  return input.replace(/\d/g, (digit: string) => englishToNepaliMap[digit as unknown as keyof typeof englishToNepaliMap]);
}

export default replaceWithNepaliNumbers;
