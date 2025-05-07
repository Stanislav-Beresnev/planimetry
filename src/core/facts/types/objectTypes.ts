/** @description Базовый объект для основных понятий планиметрии; */
export interface IBaseObject {
  /** @description строковый тип объекта; */
  readonly type: OBJECT_TYPES;

  /** @description возвращает имя объекта на основании структуры; */
  getName(): string;

  /** @description возвращает имя на основании типа объекта и его структуры; */
  getTypedName(): string;
}

export enum OBJECT_TYPES {
  point = "point",
  lineSegment = "lineSegment",
}
