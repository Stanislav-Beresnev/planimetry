import { describe, expect, test } from "vitest";
import { BaseObject } from "@core/facts/objects/baseObject";
import { Point } from "@core/facts/objects/point";
import { LineSegment } from "@core/facts/objects/lineSegment";

describe("base objects", () => {
  test("point is BaseObject (checking vite-tsconfig-paths)", () => {
    const point = new Point("A");
    expect(point instanceof BaseObject).toBeTruthy();
  });

  test("point name", () => {
    const point = new Point("A");
    expect(point.getName()).toBe("A");
    expect(point.getTypedName()).toBe("point_A");
  });

  test("line segment name", () => {
    const point1 = new Point("A");
    const point2 = new Point("B");
    const lineSegment = new LineSegment(point1, point2);
    expect(lineSegment.getName()).toBe("AB");
    expect(lineSegment.getTypedName()).toBe("lineSegment_AB");
  });
});
