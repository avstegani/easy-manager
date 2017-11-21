module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://easy-manager.mybluemix.net')
      .waitForElementPresent('#exampleInputEmail1', 60000, true,
        function(){}, 'Waiting for e-mail Input to become visible')
      .setValue('#exampleInputEmail1', 'test@br.ibm.com')
      .pause(5000)
      .end();
  }
};
