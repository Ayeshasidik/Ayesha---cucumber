var {getSelect} = require("../selectors");
/**
 * Perform an click action on the given element
 * @param  {String}   element Element selector
 */
module.exports = (element) => {
    element = getSelect(element);
    browser.click(element);
};
