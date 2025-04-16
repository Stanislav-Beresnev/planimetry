export interface IRelation {
  check(): boolean;
}

/**
 * @description Базовый класс описывающий отношение между объектами;
 */
export abstract class Relation implements IRelation {
  public abstract check(): boolean;
}
