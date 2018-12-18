import openWebsite from '../support/action/openWebsite';
import checkTitle from '../support/check/checkTitle';
import clickElement from '../support/action/clickElement';
import inputInto from '../support/action/inputInto';
import infoMsg from '../support/action/infoMsg';
import pause from '../support/action/pause';

const { Given, Then, When } = require('cucumber');

Given(
    /^I open the opencart (url|site) "([^"]*)?"$/,
    openWebsite
);

Then(
    /^the title is (not)* "([^"]*)?"$/,
    checkTitle
);

When(
    /^I click on elem "([^"]*)?"$/,
    clickElement
);

When(
    /^I enter "(.*)" into "(.*)"$/,
    inputInto
)

When(
    /^I see "(.*)" into "(.*)"$/,
    infoMsg
)

When(
    /^I pause for the (\d+)ms$/,
    pause
);