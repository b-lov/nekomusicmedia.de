import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    // Create URL parameters manually
    const params = [
      ['entry.427006970', data.get('name')],
      ['entry.1900265048', data.get('email')],
      ['entry.357049656', data.get('tel')],
      ['entry.1265565465', data.get('message')]
    ]
      .map(([key, value]) => {
        // Ensure proper URL encoding of both key and value
        return `${encodeURIComponent(key)}=${encodeURIComponent(value || '')}`
      })
      .join('&');

    const res = await fetch(
      `${import.meta.env.VITE_GOOGLE_FORM_URL}${params}`
    );

    if (!res.ok) {
      return fail(res.status, { error: res.statusText });
    }
  }
};

// import { fail } from '@sveltejs/kit';
// import { URLSearchParams } from 'url';

// /** @type {import('./$types').Actions} */
// export const actions = {
//   default: async ({ request }) => {
//     const data = await request.formData();
//     const res = await fetch(
//       import.meta.env.VITE_GOOGLE_FORM_URL +
//         new URLSearchParams([
//           ['entry.427006970', `${data.get('name')}`],
//           ['entry.1900265048', `${data.get('email')}`],
//           ['entry.357049656', `${data.get('tel')}`],
//           ['entry.1265565465', `${data.get('message')}`]
//         ])
//     );
//     if (!res.ok) {
//       return fail(res.status, { error: res.statusText });
//     }
//   }
// };
