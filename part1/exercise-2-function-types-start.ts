/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value: number) {
  return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5); // Correct

// doubleThePopulation("6.12"); // Type Error
doubleThePopulation(6.12); // Solution 1
doubleThePopulation(parseFloat("6.12")); // Solution 2

doubleThePopulation(8_526); // Correct

// doubleThePopulation(false); // Type Error
doubleThePopulation(Number(false)); // Solution 1
doubleThePopulation(0); // Solution 2

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): void {
  console.log(`The languages spoken in ${country} are:`);

  console.log(language1);

  if (language2 !== undefined) {
    console.log(language2);
  }
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
