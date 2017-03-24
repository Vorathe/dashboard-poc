// TODO: ssn, fein, saleAmount -- re-eval type assignment once formatting is factored in
export interface SetupForm {
  conditional: {
    applicationType?: boolean;
    ssn?: string;
    fein?: string;
  }
  saleAmount: string;
}
