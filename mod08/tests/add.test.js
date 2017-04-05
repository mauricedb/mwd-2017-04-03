module.exports = {
    ['Add 100 plus 200'](browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .clearValue('#x')
            .clearValue('#y')
            .setValue('#x', '100')
            .setValue('#y', '200')
            .click('#add')
            .assert.containsText('#result', '300')
            // .pause(5000)
            .end();
    },

    ['Add 200 plus 200'](browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .clearValue('#x')
            .clearValue('#y')
            .setValue('#x', '200')
            .setValue('#y', '200')
            .click('#add')
            .assert.containsText('#result', '400')
            // .pause(5000)
            .end();
    }
}