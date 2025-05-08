export interface IRelation {
  check(): boolean;
}

export abstract class Relation implements IRelation {
  public abstract check(): boolean;
}
