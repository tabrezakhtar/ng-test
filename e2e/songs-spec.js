describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080/#/songs');

    var songSpan = element(by.id('songs'));

    expect(songSpan.getText()).toEqual('Songs');
    
  });
});