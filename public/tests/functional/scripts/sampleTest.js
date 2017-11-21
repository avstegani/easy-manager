module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://easy-manager.mybluemix.net')
      .waitForElementVisible('input.exampleInputEmail1', 60000, true,
        function(){}, 'Waiting for e-mail Input to become visible')
      .setValue('input.exampleInputEmail1', 'test@br.ibm.com')
      .waitForElementVisible('.modal-body', 60000)
      .pause(5000)
      .end();
  }
};
