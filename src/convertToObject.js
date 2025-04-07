'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  for (const props of sourceString.split(';')) {
    const elements = props.split(':');

    if (elements.length !== 2) {
      continue;
    }

    result[elements[0].trim()] = elements[1].trim();
  }

  return result;
}

module.exports = convertToObject;
