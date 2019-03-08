import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SportifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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

  describe('request method', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have request method', () => {
      let spotify = new SportifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SportifyWrapper({
        token: 'foo',
      });
      spotify.request('url');
      expect(fetchedStub).to.have.been.callOnce;
    });

    it('should call fetch when request', () => {
      let spotify = new SportifyWrapper({
        token: 'foo',
      });
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SportifyWrapper({
        token: 'foo',
      });

      const headers = {
        headers: {
          Authorization: `'Bearer foo`,
        },
      };
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
