import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const bars = [
  { h: 46, color: '#2B3A50', clip: 'polygon(100% 0, 100% 100%, 0 100%)' },
  { h: 74, color: '#4A5A6E', clip: 'none' },
  { h: 100, color: '#818CF8', clip: 'polygon(50% 0, 100% 9%, 100% 100%, 0 100%, 0 9%)' },
  { h: 78, color: '#9FA8B0', clip: 'none' },
  { h: 56, color: '#CDD2D6', clip: 'polygon(0 0, 100% 100%, 0 100%)' },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: '#0B1220',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ fontSize: 22, color: '#7F8A99', letterSpacing: 4, textTransform: 'uppercase' }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#ECE9E3',
              letterSpacing: '-0.02em',
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: '#9AA3AE' }}>
            Sales funnels and operational infrastructure for early-stage startups.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', height: 360, gap: 12 }}>
          {bars.map((bar, i) => (
            <div
              key={i}
              style={{
                width: 56,
                height: `${bar.h}%`,
                backgroundColor: bar.color,
                clipPath: bar.clip,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
