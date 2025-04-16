import { IBaseObject } from "@core/facts/objects/baseObject";
import { IRelation } from "@core/facts/relations/relation";

export class Model {
  /**
   * @param objects
   */
  constructor(
    private readonly objects: IBaseObject[],
    private readonly relations: IRelation[]
  ) {}
}
