import { isLocale } from '$i18n/i18n-util';

// only accept valid languages as a segment in the URL
/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (param) => {
  return isLocale(param);
};
