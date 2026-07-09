import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(15,23,42,0) 60%)',
        }}
      >
        <svg width="220" height="198" viewBox="0 0 200 180">
          <polygon points="10,170 45,170 45,104" fill="#475569" />
          <rect x="50" y="72" width="25" height="98" fill="#64748b" />
          <polygon points="80,170 80,25 95,10 110,25 110,170" fill="#818cf8" />
          <rect x="115" y="64" width="25" height="106" fill="#94a3b8" />
          <polygon points="145,170 190,170 145,94" fill="#cbd5e1" />
        </svg>
        <div
          style={{
            marginTop: 48,
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: '#94a3b8' }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size
  );
}
