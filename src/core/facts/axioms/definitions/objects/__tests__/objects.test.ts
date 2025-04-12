import { describe, expect, test } from "vitest";
import { BaseObject } from "src/core/facts/axioms/definitions/objects/baseObject";
import { Point } from "src/core/facts/axioms/definitions/objects/point";
import { LineSegment } from "src/core/facts/axioms/definitions/objects/lineSegment";

describe("base objects", () => {
  test("point is BaseObject (checking vite-tsconfig-paths)", () => {
    const point = new Point("A");
    expect(point instanceof BaseObject).toBeTruthy();
  });

  test("point name", () => {
    const point = new Point("A");
    expect(point.getName()).toBe("A");
  });

  test("line segment name", () => {
    const point1 = new Point("A");
    const point2 = new Point("B");
    const lineSegment = new LineSegment(point1, point2);
    expect(lineSegment.getName()).toBe("AB");
  });
});
