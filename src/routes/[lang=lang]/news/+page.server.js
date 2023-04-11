export async function load({ fetch }) {
  const res = await fetch(
    'https://graph.instagram.com/me/media?' +
      new URLSearchParams([
        [
          'fields',
          'caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username,children{media_url}'
        ],
        ['limit', '10'],
        ['access_token', `${import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}`]
      ])
  );

  const json = await res.json();

  return { insta: json.data };
}
