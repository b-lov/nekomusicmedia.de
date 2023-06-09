// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
  type Locales = import('$i18n/i18n-types').Locales;
  type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions;
  // TODO put services type here??
  // type Service = keyof import('$i18n/i18n-types').Translation['services']['all'];

  namespace App {
    // interface Error {}
    interface Locals {
      locale: Locales;
      LL: TranslationFunctions;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
