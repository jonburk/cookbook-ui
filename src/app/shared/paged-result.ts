export class PagedResult<T> {
  constructor(public result: T[], public offset: number, public totalCount: number) {}
}