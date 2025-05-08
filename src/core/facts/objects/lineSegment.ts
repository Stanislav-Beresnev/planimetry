import { Point } from "@core/facts/objects/point";
import { BaseObject } from "./baseObject";
import { OBJECT_TYPES } from "@core/facts/types/objectTypes";

export class LineSegment extends BaseObject {
  override type = OBJECT_TYPES.lineSegment;

  private innerPoints: Point[] = [];

  constructor(
    private readonly startPoint: Point,
    private readonly endPoint: Point
  ) {
    super();
  }

  override getName(): string {
    return `${this.startPoint.getName()}${this.endPoint.getName()}`;
  }

  private getAllPoints(): Point[] {
    return [this.startPoint, ...this.innerPoints, this.endPoint];
  }

  public isEdgePoint(point: Point): boolean {
    return [this.startPoint, this.endPoint].includes(point);
  }

  public hasPoint(point: Point): boolean {
    return this.getAllPoints().includes(point);
  }

  public isInnerPoint(point: Point): boolean {
    return this.innerPoints.includes(point);
  }

  public markPoint(point: Point): boolean {
    const marked = this.innerPoints.includes(point);
    if (!marked) {
      this.innerPoints.push(point);
    }
    return !marked;
  }
}
