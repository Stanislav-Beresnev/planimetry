import { expect, test } from "vitest";
import { BaseObject } from "src/core/objects/baseObject";
import { Point } from "src/core/objects/point";

test("point is BaseObject (checking vite-tsconfig-paths)", () => {
  const point = new Point("A");
  expect(point instanceof BaseObject).toBeTruthy();
});
