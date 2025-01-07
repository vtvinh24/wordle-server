const { WEEKDAY, CITIZEN_ID_TYPE, USER_STATUS, ROLE } = require("../enum/Fields");
const { LOCALE } = require("../enum/Locale");
const { log } = require("./Logger");

/**
 * This function checks if the given email is valid
 * @param {string} email The email to validate
 * @returns {boolean}
 */
const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * This function checks if the given phone number is valid
 *
 * Accepts phone number with 9-10 digits starting with 0 or +[phone country code]
 * @param {string} phone
 * @returns
 */
const isPhone = (phone) => {
  return /^0\d{9,10}$/.test(phone) || /^\+\d+$/.test(phone);
};

/**
 * This function checks if the given id is a valid MongoDB ObjectId, which is a 24-character hexadecimal string
 * @param {string} id
 * @returns {boolean}
 */
const isMongoId = (id) => {
  const pattern = /^[0-9a-fA-F]{24}$/;
  return pattern.test(id);
};

/**
 * This function checks if the given weekday is valid. The weekday must be uppercase and in English
 * @param {string} weekday
 * @returns {boolean}
 */
const isWeekday = (weekday) => {
  return WEEKDAY.includes(weekday);
};

/**
 * This function checks if the given date is in the future
 * @param {Date} date
 * @returns {boolean}
 */
const isFutureDate = (date) => {
  const today = new Date();
  const inputDate = new Date(date);
  return inputDate > today;
};

/**
 * This function checks if the given number is numeric
 * @param {string} num
 * @returns {boolean}
 */
const isNumeric = (num) => {
  return /^\d+$/.test(num);
};

/**
 * This function checks if the given string is alphanumeric
 * @param {string} str
 * @returns {boolean}
 */
const isAlphaNumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

/**
 * This function checks if the given country is valid
 * @param {string} country
 * @returns {boolean}
 */
const isCountry = (country) => {
  return Object.keys(LOCALE).includes(country);
};

/**
 * This function checks if the given country code is valid
 * @param {string} countryCode
 * @returns {boolean}
 */
const isCountryCode = (countryCode) => {
  return Object.values(LOCALE).includes(countryCode);
};

/**
 * This function checks if the given role is valid
 * @param {string} role
 * @returns {boolean}
 */
const isRole = (role) => {
  return ROLE.includes(role);
};

/**
 * This function checks if the given user status is valid
 * @param {string} status
 * @returns
 */
const isUserStatus = (status) => {
  return USER_STATUS.includes(status);
};

/**
 * This function checks if the given URL is valid
 * @param {string} url
 * @returns {boolean}
 */
const isUrl = (url) => {
  return /^(http|https):\/\/[^ "]+$/.test(url);
};

/**
 * This function checks if the given path is valid
 * @param {string} path
 * @returns {boolean}
 */
const isPath = (path) => {
  return /^\/[^ "]+$/.test(path);
};

/**
 * This function checks if the given string is base64 encoded
 * @param {string} str
 * @returns {boolean}
 */
const isBase64 = (str) => {
  return /^[A-Za-z0-9+/]+={0,2}$/.test(str);
};

module.exports = {
  isEmail,
  isPhone,
  isMongoId,
  isWeekday,
  isFutureDate,
  isNumeric,
  isAlphaNumeric,
  isCountry,
  isCountryCode,
  isRole,
  isUserStatus,
  isUrl,
  isPath,
  isBase64,
};
