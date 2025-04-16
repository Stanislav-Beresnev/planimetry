import { OBJECT_TYPES } from "@core/facts/objectTypes";

export interface IBaseObject {
  getTypedName(): string;
}

/**
 * @description Базовый объект для основных понятий планиметрии;
 */
export abstract class BaseObject implements IBaseObject {
  abstract readonly type: OBJECT_TYPES;

  /**
   * @description Получение имени объекта на основании структуры
   */
  abstract getName(): string;

  getTypedName(): string {
    return `${this.type}_${this.getName()}`;
  }
}
