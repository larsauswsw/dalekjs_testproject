module.exports = {	
	'Page title is correct': function (test) {
	  test
	    .open('http://www.etecture.de')
	    .assert.title().is('Home - ETECTURE GmbH', 'It has title')
	    .done();
	},
	
	'Kontakt Link': function (test) {
	  test
	    .open('http://www.etecture.de')
	    .assert.text('.more', 'Kontakt', 'Text')
	    .done();
	}
};