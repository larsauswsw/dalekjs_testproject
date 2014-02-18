module.exports = {
'Page title is correct': function (test) {
  test
    .open('http://www.google.de')
    .assert.title().is('Google', 'It has title')
    .done();
}/*,

'Amazon does its thing': function (test) {
  test
    .open('http://www.amazon.com/')
    .type('#twotabsearchtextbox', 'Blues Brothers VHS')
    .click('.nav-submit-input')
    .waitForElement('#result_0')
    .assert.text('#result_0 .newaps a span').is('The Blues Brothers [VHS]')
    .done();
}*/
};