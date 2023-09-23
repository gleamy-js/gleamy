import { spreadColorProps } from '../spreadColorProps';

describe('spreadColorProps', () => {
  const colorStops = [
    ['0.00', '#FFFFAC'],
    ['0.50', '#9f7928'],
    ['1.00', '#FFFFAC'],
  ];

  const halflyScaled = [
    ['0.00', '#FFFFAC'],
    ['0.25', '#9f7928'],
    ['0.50', '#FFFFAC'],
  ];

  test('does not scale when input is zero', () => {
    const renderStops = spreadColorProps(colorStops, 0, 1);

    expect(renderStops).toEqual(colorStops);
  });

  test('scale to half', () => {
    const renderStops = spreadColorProps(colorStops, 0, 0.5);

    expect(renderStops).toEqual(halflyScaled);
  });
});
