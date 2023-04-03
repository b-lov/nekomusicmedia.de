import de from '$i18n/de';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (service) => {
  return Object.keys(de.services.all).includes(service);
};
