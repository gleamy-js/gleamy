import { useRef } from 'react';
import { GleamyProvider } from '../lib/provider';
import * as Components from '../lib/components';
import styled from 'styled-components';

const RenderContainer = styled.main`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  margin: 40px 0;
  border: 2px dashed rgba(33, 33, 33, 0.2);
  padding: 20px;
  max-width: 90vw;
  // background: url('https://www.gleamy.dev/backgrounds/wood-bw.jpg') 50% 50%;
  background-size: cover;
`;

const App = () => {
  const clipPath = useRef(null);
  return (
    <>
      <GleamyProvider>
        <h1>Gleamy</h1>
        <svg
          viewBox="0 0 100 100"
          id="clipPath"
          ref={clipPath}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: 0,
            width: 0,
            visibility: 'hidden',
            position: 'absolute',
          }}
        >
          <path d="M12.5,87.5L50,12.5L87.5,87.5L12.5,87.5Z" />
        </svg>
        <RenderContainer>
          <Components.Glitter
            hueRotationSpeed={0.5}
            acceleration={0.9}
            glitterColor={['holographic']}
            clipPathRef={clipPath}
            intensity={0.8}
          />
          <Components.Glitter
            glitterColor={['hotpink', 'blue']}
            depthAlpha={true}
            backgroundColor={'transparent'}
            clipPathRef={clipPath}
            clipPathScale={1}
          />
          <Components.BlueSteel edgeThickness={2} clipPathRef={clipPath} />
          <Components.Cobalt edgeThickness={2} />
          <Components.Copper clipPathRef={clipPath} />
          <Components.Gold clipPathRef={clipPath} edgeThickness={1} />
          <Components.RoseGold clipPathRef={clipPath} />
          <Components.Silver clipPathRef={clipPath} edgeThickness={2} />
          <Components.Steel clipPathRef={clipPath} />
          <Components.Iridescent clipPathRef={clipPath} />
          <Components.Lacquer edgeThickness={6} clipPathRef={clipPath} />
          <Components.Holographic clipPathRef={clipPath} />
        </RenderContainer>
      </GleamyProvider>
    </>
  );
};

export default App;
