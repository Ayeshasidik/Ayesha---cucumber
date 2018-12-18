/**
 * Input data into an input field
 * @param  {String}   data      The data to input
 * @param  {String}   destination The selector for the destination element
 */

var {getSelect} = require("../selectors");

module.exports = (data, destination) => {
    let field = getSelect(destination);
    browser.setValue(field, data);
};