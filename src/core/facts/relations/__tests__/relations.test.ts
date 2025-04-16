import { describe, expect, test } from "vitest";
import { Point } from "@core/facts/objects/point";
import { LineSegment } from "@core/facts/objects/lineSegment";

describe("relations objects", () => {
  test("point in line segment", () => {
    const pointA = new Point("A");
    const pointB = new Point("B");
    const pointC = new Point("C");
    const lineSegment = new LineSegment(pointA, pointB);
    expect(lineSegment.hasPoint(pointA)).toBeTruthy();
    expect(lineSegment.hasPoint(pointB)).toBeTruthy();
    expect(lineSegment.hasPoint(pointC)).toBeFalsy();
  });
});
