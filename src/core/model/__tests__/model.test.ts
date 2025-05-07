import { describe, expect, test } from "vitest";
import { Point } from "@core/facts/objects/point";
import { LineSegment } from "@core/facts/objects/lineSegment";
import { Model } from "@core/model/model";

describe("model tests", () => {
  test("init model", () => {
    const pointA = new Point("A");
    const pointB = new Point("B");
    const lineSegment = new LineSegment(pointA, pointB);
    const model = new Model([pointA, pointB, lineSegment], []);

    /** todo: класс отношений не должен содержать проверку - он лишь фисксирует факт отношения
     * проверка должна быть в другом классе
     *
     * а модель мы передаем объекты и отношения
     * а внутри проверяем их на противоречивость и возможность оптимизиации
     */
  });
});
