import {ActionIdType} from "../types/type-aliases";

export class CrudAction {
  public constructor(
    public id:ActionIdType,
    public query:()=>Promise<Object|null>
  ) {
  }
}
