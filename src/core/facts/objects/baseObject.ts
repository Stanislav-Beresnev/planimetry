import { OBJECT_TYPES } from "src/core/facts/objectTypes";

/**
 * @description Базовый объект для основных понятий планиметрии;
 */
export abstract class BaseObject {
  abstract readonly type: OBJECT_TYPES;

  /**
   * @description Получение имени объекта на основании структуры
   */
  abstract getName(): string;

  getTypedName(): string {
    return `${this.type}_${this.getName()}`;
  }
}
