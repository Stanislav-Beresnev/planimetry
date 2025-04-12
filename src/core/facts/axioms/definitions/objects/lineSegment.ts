import { Point } from "src/core/facts/axioms/definitions/objects/point";
import { BaseObject } from "./baseObject";

/**
 * @description Отрезок
 */
export class LineSegment extends BaseObject {
  /**
   * @param startPoint - точка начала отрезка;
   * @param endPoint - точка конца отрезка;
   */
  constructor(
    private readonly startPoint: Point,
    private readonly endPoint: Point
  ) {
    super();
  }

  override getName(): string {
    return `${this.startPoint.getName()}${this.endPoint.getName()}`;
  }
}
