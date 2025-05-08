export interface IBaseObject {
  readonly type: OBJECT_TYPES;
  getName(): string;
  getTypedName(): string;
}

export enum OBJECT_TYPES {
  point = "point",
  lineSegment = "lineSegment",
}
