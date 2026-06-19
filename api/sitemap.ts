export default function handler(req, res) {
  // Set response header agar browser mengenalinya sebagai XML
  res.setHeader('Content-Type', 'text/xml');

  // Nanti, Anda bisa melakukan fetch data dari API atau database di sini
  // Contoh: const menus = await fetch('...').then(r => r.json());

  // URL dasar aplikasi Anda (dinamis berdasarkan request host)
  const host = req.headers.host ? `https://${req.headers.host}` : 'https://yourdomain.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${host}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${host}/menu</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Contoh jika ada data dinamis: -->
  <!-- 
  \${menus.map(menu => \`
    <url>
      <loc>\${host}/menu/\${menu.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  \`).join('')}
  -->
</urlset>`;

  res.status(200).send(xml);
}
