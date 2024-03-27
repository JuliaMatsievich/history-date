import { IPoints } from '../../types/types';

export const getCoordPoints = (
  radius: number,
  numberOfPoints: number
): IPoints[] => {
  const points = [];
  for (let i = 0; i < numberOfPoints; i += 1) {
    const angle = i * ((2 * Math.PI) / numberOfPoints) - 45;
    const x = radius * Math.cos(angle) + radius;
    const y = radius * Math.sin(angle) + radius;
    points.push({ x, y });
  }
  return points;
};
