import { LineSegment } from "src/core/facts/objects/lineSegment";
import { Point } from "src/core/facts/objects/point";
import { Relation } from "src/core/facts/relations/relation";

/**
 * @description Точка служит концом отрезка
 */
export class EndSegmentLineRelation extends Relation {
  /**
   * @param point - точка, для которой проверяется отношение;
   * @param lineSegment- отрезок, для которого проверяется отношение;
   */
  constructor(
    private readonly point: Point,
    private readonly lineSegment: LineSegment
  ) {
    super();
  }
  public override check(): boolean {
    return this.lineSegment.hasPoint(this.point);
  }
}
