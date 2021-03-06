/*
	File: test/expected/pipeline.ts
	cpuabuse.com
*/

/**
 * Provide the expected data.
 */

/**
 * Carriage return.
 */

export const carriageReturnCharacter: string = "\r";

/**
 * DEL.
 */
export const del: string = "^?";

/**
 * Manually calculated result for 128 to 160.
 */
export const extendedCharacters: string = "M-^@M-^A";

/**
 * Manually calculated result for 160 to 255.
 */
export const extendedHigher: string = "M-*M-+M-,";

/**
 * All of the letters.
 */
export const letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Total amount of letters twice.
 */
export const lettersCount: number = 52;

/**
 * New line or line feed.
 */
export const lineFeedCharacter: string = "\n";

/**
 * Literal numbers.
 */
export const numbers: string = "0123456789";

/**
 * Total amount of numbers.
 */
export const numbersCount: number = 10;

/**
 * List of food with numbers for the
 */
export const food: string = `1 Beef
2 Sugar cane
3 Beans`;

/**
 * Numbered list of animals with blank line for the number-nonblank test.
 */
export const animals: string = `1 Dog

2 Cat

3 Snake`;

/**
 * List of insects for squeeze-blank test.
 */
export const insects: string = `Grasshoper

Praying Mantis
`;

/**
 * Expected value for test of `processTabs` function.
 */
export const fruitTable: string = `Name^IWeight^IColor
Orange^I200^IOrange
Apple^I250^IRed`;

/**
 * Expected name for test of `processEnds` function.
 */
export const fruitList: string = `Apple$
Orange$`;

/**
 * Literal space.
 */
export const space: string = " ";

/**
 * All of the special characters from 128 to 160.
 */
export const specialCharacters: string = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

/**
 * Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
 */
export const specialCharactersCount: number = 127 - 32 - 10 - 26 - 26 - 1;

/*
 * Tab character for show-nonprinting.
 */
export const tabCharacter: string = "\t";

/**
 * A string containing a sequence of `M-^?`.
 */
export const unicodeCharacter: string = "M-^?M-^?M-^?M-^?M-^?M-^?M-^?";
