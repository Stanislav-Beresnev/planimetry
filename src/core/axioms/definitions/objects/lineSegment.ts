import { Point } from "src/core/axioms/definitions/objects/point";
import { BaseObject } from "./baseObject";

/**
 * @description Отрезок
 */
export class LineSegment extends BaseObject {
  /**
   * @param name - имя объекта;
   * @param startPoint - точка начала отрезка;
   * @param endPoint - точка конца отрезка;
   */
  constructor(
    name: string,
    readonly startPoint: Point,
    readonly endPoint: Point
  ) {
    super(name);
  }
}
