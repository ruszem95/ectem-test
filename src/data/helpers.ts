export const filterByName = (
  item: Required<{ name: string }>,
  search: string
): boolean =>
  item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
