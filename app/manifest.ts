import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'R3F Next Starter',
    short_name: 'R3F Next Starter',
    icons: [
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    start_url: '/',
    scope: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#ffffff',
  }
}
