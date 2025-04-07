'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';');

  properties.forEach((props) => {
    const elements = props.split(':');

    if (elements.length === 2) {
      result[elements[0].trim()] = elements[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
