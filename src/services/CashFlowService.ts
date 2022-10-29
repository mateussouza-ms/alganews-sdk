import { CashFlow } from "../@types";
import Service from "../Service";
import { generateQueryString } from "../utils";

export class CashFlowService extends Service {
  static getExistingEntry(entryId: number) {
    return this.Http.get<CashFlow.EntryDetailed>(
      `/cashflow/entries/${entryId}`
    ).then(this.getData);
  }

  static updateExistingEntry(entryId: number, entry: CashFlow.EntryInput) {
    return this.Http.put<CashFlow.EntryDetailed>(
      `/cashflow/entries/${entryId}`,
      entry
    ).then(this.getData);
  }

  static removeExistingEntry(entryId: number) {
    return this.Http.delete<{}>(`/cashflow/entries/${entryId}`).then(
      this.getData
    );
  }

  static getAllEntries(search: CashFlow.Query) {
    const queryString = generateQueryString(search);
    return this.Http.get<CashFlow.EntrySummary[]>(
      `/cashflow/entries${queryString}`
    ).then(this.getData);
  }

  static insertNewEntry(entry: CashFlow.EntryInput) {
    return this.Http.post<CashFlow.EntryDetailed>(
      "/cashflow/entries",
      entry
    ).then(this.getData);
  }

  static removeEntriesBatch(entriesIds: number[]) {
    return this.Http.put<{}>(
      "/cashflow/entries/bulk-removals",
      entriesIds
    ).then(this.getData);
  }

  static getExistingCategory(categoryId: number) {
    return this.Http.get<CashFlow.CategoryDetailed>(
      `/cashflow/categories/${categoryId}`
    ).then(this.getData);
  }

  static updateExistingCategory(
    categoryId: number,
    category: CashFlow.CategoryInput
  ) {
    return this.Http.put<CashFlow.CategoryDetailed>(
      `/cashflow/categories/${categoryId}`,
      category
    ).then(this.getData);
  }

  static removeExistingCategory(categoryId: number) {
    return this.Http.delete<{}>(`/cashflow/categories/${categoryId}`).then(
      this.getData
    );
  }

  static getAllCategories(query?: {
    sort: [keyof CashFlow.CategorySummary, "asc" | "desc"];
  }) {
    const queryString = query ? generateQueryString(query) : "";
    return this.Http.get<CashFlow.CategorySummary[]>(
      `/cashflow/categories${queryString}`
    ).then(this.getData);
  }

  static insertNewCategory(category: CashFlow.EntryInput) {
    return this.Http.post<CashFlow.CategoryDetailed>(
      "/cashflow/categories",
      category
    ).then(this.getData);
  }
}
