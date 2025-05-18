import { SORT_ORDER } from '../constants/index.js';

const SORT_FIELDS = [
  '_id',
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
  'createdAt',
  'updatedAt',
];

const parseSortOrder = (sortOrder, defaultValue) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);

  if (isKnownOrder) {
    return sortOrder;
  }

  return defaultValue;
};

const parseSortBy = (sortBy, defaultValue) => {
  if (SORT_FIELDS.includes(sortBy)) {
    return sortBy;
  }

  return defaultValue;
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder, SORT_ORDER.ASC);
  const parsedSortBy = parseSortBy(sortBy, '_id');

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
