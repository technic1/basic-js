import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = {};

  for (const domain of domains) {
    const domainArr = domain.split('.').reverse();
    const first = '.' + domainArr[0];
    if (res[first]) {
      res[first] += 1;
    } else res[first] = 1;

    for (let i = 1; i < domainArr.length; i++) {
      const key = first + '.' + domainArr.slice(1, i + 1).join('.');
      if (res[key]) {
        res[key] += 1;
      } else res[key] = 1;
    }
  }

  return res;
}
