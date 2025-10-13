
/**
 * Extracts named values from a string using a template with %param% placeholders.
 * @param {string} template - The template string with %param% placeholders.
 * @param {string} input - The input string to extract values from.
 * @returns {Object} Object mapping param names to extracted values.
 * @example
 * strprs('Hi, my name is %name% , and I am %age%', 'Hi, my name is Charan , and I am 18');
 * // { name: 'Charan', age: '18' }
 */
export function strprs(template, input) {
    if (typeof template !== 'string' || typeof input !== 'string') {
        throw new TypeError('Both template and input must be strings');
    }

    // Find all param names between % signs
    const paramRegex = /%([^%]+)%/g;
    const paramNames = [];
    let match;
    while ((match = paramRegex.exec(template)) !== null) {
        paramNames.push(match[1]);
    }

    // Build a regex to extract values
    // Escape template except for %param%
    let regexStr = template.replace(/%([^%]+)%/g, '(.+?)')
        .replace(/[.*+?^${}()|[\]\\]/g, '\$&') // escape regex chars
        .replace(/\%([^%]+)\%/g, '(.+?)'); // restore capture groups

    // Remove double escaping for spaces and commas
    regexStr = regexStr.replace(/\ /g, ' ');
    regexStr = regexStr.replace(/\,/g, ',');

    const valueRegex = new RegExp('^' + regexStr + '$');
    const values = valueRegex.exec(input);
    if (!values) {
        // No match, return empty object
        return {};
    }

    // values[0] is the full match, values[1..] are captures
    const result = {};
    paramNames.forEach((name, i) => {
        result[name] = values[i + 1] || '';
    });
    return result;
}

// CommonJS export (Node) and attach to global for browsers
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = strprs;
} else if (typeof window !== 'undefined') {
    window.strprs = strprs;
} else if (typeof globalThis !== 'undefined') {
    globalThis.strprs = strprs;
}
