import { z } from "zod";

const Point = z.object({
  xFrac: z.number().min(0).max(1),
  yFrac: z.number().min(0).max(1),
});

export const DetectedCoordsSchema = z.object({
  name: Point.nullable(),
  age: Point.nullable(),
  weight: Point.nullable(),
  bp: Point.nullable(),
  date: Point.nullable(),
  mobile: Point.nullable(),
  bodyStart: Point.nullable(),
});

export type DetectedCoords = z.infer<typeof DetectedCoordsSchema>;
