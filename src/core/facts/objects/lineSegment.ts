import { Point } from "src/core/facts/objects/point";
import { BaseObject } from "./baseObject";
import { OBJECT_TYPES } from "src/core/facts/objectTypes";

/**
 * @description Отрезок
 */
export class LineSegment extends BaseObject {
  override type = OBJECT_TYPES.lineSegment;
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

  public hasPoint(point: Point): boolean {
    return [this.startPoint, this.endPoint].includes(point);
  }
}
