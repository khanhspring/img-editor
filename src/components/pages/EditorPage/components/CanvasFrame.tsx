import { forwardRef } from 'react';

const CanvasFrame = forwardRef<HTMLCanvasElement>((_, ref) => (
  <canvas ref={ref} />
));

CanvasFrame.displayName = 'CanvasFrame';

export default CanvasFrame;
