let mapObj= {
    "Login link": "a.btn.btn-link.navbar-btn",
    "Login button": "button.btn.btn-primary.btn-lg.hidden-xs",
    "userfield": "#input-email",
    "password-field": "#input-password",
    "Info-label": ".alert.alert-danger"
}
let wordings = {
    "Login-error-message":"No match for E-Mail and/or Password.\n×"
}

function getSelect(selector){
    return mapObj[selector];
}

function getWording(key){
    return wordings[key];
}
module.exports = {
    getSelect,
    getWording
}