import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!(typeof sampleActivity === 'string')) return false;
  let act;
  if (sampleActivity.indexOf('.') !== -1) {
    act = Number.parseFloat(sampleActivity);
  } else {
    act = Number.parseInt(sampleActivity);
  }

  if (act === undefined || isNaN(act) || act > MODERN_ACTIVITY || act < 0) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const res = Math.ceil(Math.log(MODERN_ACTIVITY / act) / k);
  if (res === Infinity) {
    return false;
  }
  return res;
}
