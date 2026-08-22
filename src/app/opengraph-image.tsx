import { ImageResponse } from 'next/og'

export const alt = 'Mentroo – Ihr Auftrag, der passende Fachbetrieb'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#14325F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(179,246,0,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Signal green accent bar */}
        <div
          style={{
            width: '56px',
            height: '4px',
            background: '#B3F600',
            borderRadius: '2px',
            marginBottom: '40px',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: '100px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1,
            marginBottom: '28px',
            letterSpacing: '-3px',
          }}
        >
          Mentroo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '30px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.5,
            maxWidth: '680px',
          }}
        >
          Ihr Auftrag — wir finden den richtigen Fachbetrieb.
        </div>

        {/* Bottom-right pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '72px',
            right: '80px',
            background: '#B3F600',
            color: '#08090A',
            fontSize: '20px',
            fontWeight: 700,
            padding: '14px 28px',
            borderRadius: '100px',
          }}
        >
          mentroo.de
        </div>
      </div>
    ),
    { ...size },
  )
}
