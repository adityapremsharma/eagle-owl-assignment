export const recipe = (pageNo, isIncorrect, isUntagged, idDisabled) => {
  return {
    pageNo: pageNo,
    isIncorrect: isIncorrect,
    isUntagged: isUntagged,
    idDisabled: idDisabled,
  };
};

export const active = (
  allRecipeButton,
  incorrectButton,
  untaggedButton,
  disabledButton
) => {
  return {
    allRecipeButton: allRecipeButton,
    incorrectButton: incorrectButton,
    untaggedButton: untaggedButton,
    disabledButton: disabledButton,
  };
};
