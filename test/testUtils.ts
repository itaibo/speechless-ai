// @ts-nocheck

require('mocha');

import Speechless from '../src/speechless.js';

export const getSpeechlessTest = () => {
  const speechlessInstance = new Speechless();
  return speechlessInstance;
};
