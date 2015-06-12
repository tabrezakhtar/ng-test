describe('music player homepage', function() {
  it('should have a header', function() {
    browser.get('http://localhost:8080');
    var header = element(by.css('.navbar-brand'));
    expect(header.getText()).toEqual('SPA Music Player - Tabrez Akhtar');    
  });

  it('should have a songs title', function() {
    browser.get('http://localhost:8080');
    var title = element(by.id('songsTitle'));
    expect(title.getText()).toEqual('Songs');    
  });

  it('should have a playlists title', function() {
    browser.get('http://localhost:8080');
    var title = element(by.id('playlistTitle'));
    expect(title.getText()).toEqual('Playlist');    
  });
});