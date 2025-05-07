export interface IBaseObject {
  getTypedName(): string;
}

export enum OBJECT_TYPES {
  point = "point",
  lineSegment = "lineSegment",
}
