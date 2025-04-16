import { OBJECT_TYPES } from "@core/facts/objectTypes";
import { BaseObject } from "./baseObject";

/**
 * @description Точка;
 */
export class Point extends BaseObject {
  override type = OBJECT_TYPES.point;
  /**
   * @param name - имя точки;
   */
  constructor(private readonly name: string) {
    super();
  }

  override getName(): string {
    return this.name;
  }
}
