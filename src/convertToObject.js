'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';');

  const elements = properties.map((props) => props.split(':'));
  const validElements = elements.filter((e) => e.length === 2);

  validElements.forEach((e) => {
    result[e[0].trim()] = e[1].trim();
  });

  return result;
}

module.exports = convertToObject;
