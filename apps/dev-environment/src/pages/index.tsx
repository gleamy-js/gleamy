import Head from 'next/head';
import {
  GleamyProvider,
  Gold,
  Glitter,
  Silver,
  Steel,
  BlueSteel,
  Copper,
  RoseGold,
  Holographic,
  Cobalt,
  Gunmetal,
  Iridescent,
  Lacquer,
} from '@gleamy/react';
import { useState } from 'react';

export default function Home() {
  const [isRendering, setIsRendering] = useState(true);
  const [fps, setFPS] = useState(60);
  const [animator, setAnimator] = useState('mouseMove');

  const onChangeFPS = (event: { target: { value: string } }) => {
    !!event.target.value && setFPS(parseInt(event.target.value, 10));
  };

  const onChangeAnimator = (event: { target: { value: string } }) => {
    setAnimator(event.target.value.toString());
  };

  const onChangeRendering = (event: { target: { checked: boolean } }) => {
    const newValue = event.target.checked;
    setIsRendering(newValue);
  };

  const options = {
    fps,
    defaultAnimator: animator,
  };

  return (
    <>
      <Head>
        <title>Gleamy development environment</title>
        <link rel="icon" href="./favicon.ico" />
        <meta property="og:image" content="./images/gleamy-logo.jpg" />
        <meta name="twitter:image" content="./images/gleamy-logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="apple-touch-icon" href="./logo192.png" />
      </Head>
      <main>
        <div>
          <h1>Gleamy development environment</h1>
          <div className="wrapper">
            <div className="performance-panel">
              <h2>Options</h2>
              <label className="options-label">
                <input type="number" value={fps} onChange={onChangeFPS} />
                &nbsp;FPS
              </label>
              <label className="options-label">
                <input
                  type="checkbox"
                  value="1"
                  checked={isRendering}
                  onChange={onChangeRendering}
                />
                &nbsp; is rendering
              </label>
              <label className="options-label">
                animatior:{' '}
                <select value={animator} onChange={onChangeAnimator}>
                  <option value="scroll">scroll</option>
                  <option value="mouseMove">mouse</option>
                </select>
              </label>
            </div>
            <div className="content">
              <GleamyProvider options={options}>
                <Gold rendering={isRendering} />
                <Glitter
                  depthAlpha={true}
                  rendering={isRendering}
                  acceleration={1.2}
                  glitterSize={2}
                  glitterCoverage={15}
                  backgroundColor={'rgba(0,0,0, 0.3)'}
                />
                <Silver rendering={isRendering} />
                <Steel rendering={isRendering} />
                <BlueSteel rendering={isRendering} />
                <Copper rendering={isRendering} />
                <RoseGold rendering={isRendering} />
                <Holographic rendering={isRendering} />
                <Cobalt rendering={isRendering} />
                <Gunmetal rendering={isRendering} />
                <Iridescent rendering={isRendering} />
                <Lacquer rendering={isRendering} />
              </GleamyProvider>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
