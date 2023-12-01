// @ts-nocheck

'use strict';

import {expect} from 'chai';

import {getSpeechlessTest} from './testUtils.js';

const speechless = getSpeechlessTest();
import Speechless from '../src/speechless.js';

describe('Speechless instance', () => {
  describe('initialization', () => {
    it('should not throw', () => {
      expect(() => {
        new Speechless();
      }).to.not.throw();
    });
  });

  describe('completion', () => {
    it('should return a speechless response', async () => {
      const response = await speechless.chat.completions.create([{ role: 'user', content: 'Are you an AI?' }]);
      expect(response).to.be.equal('😮');
    });
  });
});
