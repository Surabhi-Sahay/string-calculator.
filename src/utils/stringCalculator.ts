export function add(numbers: string): number {
    if (numbers === "") return 0; // Requirement 1: Empty string returns 0.

    let delimiter = /[\n,]/; // Default delimiters are comma and newline.

    if (numbers.startsWith("//")) {
        // Custom delimiter support
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, delimiterEndIndex); // Extract delimiter after "//"
        
        // Escape special regex characters in the delimiter
        const escapedDelimiter = customDelimiter.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter); // Create a safe regular expression
        numbers = numbers.substring(delimiterEndIndex + 1); // Numbers after custom delimiter
    }


    // Split input string using the determined delimiter
    const parts = numbers.split(delimiter).map(Number);

    // Negative numbers handling
    const negatives = parts.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    // Sum the numbers (ignoring non-numeric values, just in case)
    return parts.reduce((sum, num) => sum + num, 0);
}
