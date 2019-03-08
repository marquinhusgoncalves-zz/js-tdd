import { expect } from 'chai';

import SportifyWrapper from '../src/index';

describe('SportifyWrapper', () => {
  it('should create an instance of SpotifyWrapper', () =>  {
    let spotify = new SportifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SportifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SportifyWrapper({
      apiURL: 'blabla',
    });
    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let spotify = new SportifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotify = new SportifyWrapper({
      token: 'foo',
    });
    expect(spotify.token).to.be.equal('foo');
  });
});
