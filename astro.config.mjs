import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://stowhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
