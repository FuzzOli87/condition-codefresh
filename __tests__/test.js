import SRErr from '@semantic-release/error';
import conditionCf from '../src';

test('Should continue if all validations pass', () => {
  const config = {
    env: {
      CF_BUILD_TIMESTAMP: '123',
      CF_BRANCH: 'master'
    },
    options: {
      branch: 'master'
    }
  };

  conditionCf({}, config, (err) => {
    expect(err).toBeUndefined();
  });
});

test('Should fail if not in Codefresh environment', () => {
  conditionCf({}, { env: {} }, (err) => {
    expect(err).toBeInstanceOf(SRErr);
    expect(err.code).toBe('ENOCODEFRESH');
  });
});

test('Should fail if this is not the right branch to publish from', () => {
  const config = {
    env: {
      CF_BUILD_TIMESTAMP: '123',
      CF_BRANCH: 'not-master'
    },
    options: {
      branch: 'master'
    }
  };

  conditionCf({}, config, (err) => {
    expect(err).toBeInstanceOf(SRErr);
    expect(err.code).toBe('EBRANCHMISMATCH');
  });
});
