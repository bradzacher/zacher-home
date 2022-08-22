declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- decl merging
  interface Global {
    window: Window;
    document: Document;
  }
}
