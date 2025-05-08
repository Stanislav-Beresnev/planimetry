import { describe, expect, test } from "vitest";
import { Point } from "@core/facts/objects/point";
import { LineSegment } from "@core/facts/objects/lineSegment";

describe("relations tests", () => {
  test("end point in line segment", () => {
    const pointA = new Point("A");
    const pointB = new Point("B");
    const pointC = new Point("C");
    const lineSegment = new LineSegment(pointA, pointB);

    expect(lineSegment.hasPoint(pointA)).toBeTruthy();
    expect(lineSegment.hasPoint(pointB)).toBeTruthy();
    expect(lineSegment.hasPoint(pointC)).toBeFalsy();

    expect(lineSegment.isEdgePoint(pointA)).toBeTruthy();
    expect(lineSegment.isEdgePoint(pointB)).toBeTruthy();
    expect(lineSegment.isEdgePoint(pointC)).toBeFalsy();

    expect(lineSegment.isInnerPoint(pointA)).toBeFalsy();
    expect(lineSegment.isInnerPoint(pointB)).toBeFalsy();
    expect(lineSegment.isInnerPoint(pointC)).toBeFalsy();
  });

  test("inner point in line segment", () => {
    const pointA = new Point("A");
    const pointB = new Point("B");
    const pointC = new Point("C");
    const lineSegment = new LineSegment(pointA, pointB);
    lineSegment.markPoint(pointC);

    expect(lineSegment.hasPoint(pointA)).toBeTruthy();
    expect(lineSegment.hasPoint(pointB)).toBeTruthy();
    expect(lineSegment.hasPoint(pointC)).toBeTruthy();

    expect(lineSegment.isEdgePoint(pointA)).toBeTruthy();
    expect(lineSegment.isEdgePoint(pointB)).toBeTruthy();
    expect(lineSegment.isEdgePoint(pointC)).toBeFalsy();

    expect(lineSegment.isInnerPoint(pointA)).toBeFalsy();
    expect(lineSegment.isInnerPoint(pointB)).toBeFalsy();
    expect(lineSegment.isInnerPoint(pointC)).toBeTruthy();
  });
});
