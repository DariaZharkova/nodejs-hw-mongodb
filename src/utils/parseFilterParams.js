const ALLOWED_TYPES = ['work', 'home', 'personal'];

const parseContactType = (type) => {
  if (typeof type !== 'string') return;

  if (!ALLOWED_TYPES.includes(type)) return;

  return type;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;

  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return;
  }
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
