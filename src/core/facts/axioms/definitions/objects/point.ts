import { BaseObject } from "./baseObject";

/**
 * @description Точка;
 */
export class Point extends BaseObject {
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
