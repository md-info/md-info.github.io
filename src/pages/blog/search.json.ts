import { getCollection } from 'astro:content';
export async function GET() {
  const notes = await getCollection('blog', ({data}) => !data.draft);
  const index=Object.fromEntries(notes.map(note=>[`/blog/${note.slug}/`,[note.data.title,note.data.description,...note.data.tags,note.body].join(' ').toLowerCase()]));
  return new Response(JSON.stringify(index),{headers:{'Content-Type':'application/json; charset=utf-8'}});
}
