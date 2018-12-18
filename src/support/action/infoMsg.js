/**
* Verify the errmsg 
* @param  {String}   errmsg      The message to verify
* @param  {String}   selector    The selector for the destination element where we verify the error msg
*/

var { getSelect, getWording } = require("../selectors");

module.exports = (errMsg, selector) => {
    let sel = getSelect(selector);
    let expectedWording = getWording(errMsg);
    let actualMsg = browser.getText(sel);
    expect(expectedWording).to.equal(
        actualMsg,
        `Expected text to be "${expectedWording}" but found "${actualMsg}"`
    );
};
