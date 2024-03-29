export const isNumberValid = (id: number) => {
  if (!id || Number.isNaN(id) || !isFinite(id) || id <= 0) {
    return false;
  }

  return true;
};
