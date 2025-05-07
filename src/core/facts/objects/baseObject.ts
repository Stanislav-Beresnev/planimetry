import { IBaseObject, OBJECT_TYPES } from "@core/facts/types/objectTypes";

export abstract class BaseObject implements IBaseObject {
  abstract readonly type: OBJECT_TYPES;

  abstract getName(): string;

  getTypedName(): string {
    return `${this.type}_${this.getName()}`;
  }
}
