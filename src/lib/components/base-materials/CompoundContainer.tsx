import React, { forwardRef } from 'react';
import { TCompound } from 'src/lib/types/base-materials/TCompound';
import styled from 'styled-components';

const Div = styled.div`
  display: block;
  position: relative;
`;

type ForwardRef = React.ForwardedRef<HTMLDivElement | null>;

export const CompoundContainer = forwardRef<ForwardRef, TCompound>(
  (props: TCompound) => <Div {...props} />,
);
