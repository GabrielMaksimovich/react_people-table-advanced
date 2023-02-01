interface SortField {
  id: number,
  fieldName: string,
}

export const sortFields: SortField[] = [
  { id: 1, fieldName: 'name' },
  { id: 2, fieldName: 'sex' },
  { id: 3, fieldName: 'born' },
  { id: 4, fieldName: 'died' },
];
