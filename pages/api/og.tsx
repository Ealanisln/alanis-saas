import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function MyOgImage() {
  return new ImageResponse(
    (
        <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 100,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
        }}
        >
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Alanis
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Web
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Developer
        </div>
      </div>
      
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}