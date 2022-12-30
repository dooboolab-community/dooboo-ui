export const isEmptyObject = (param: any): boolean =>
  Object.keys(param).length === 0 && param.constructor === Object;
