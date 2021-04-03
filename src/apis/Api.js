import axios from "axios";

const list = axios.create({
  baseURL:
    " https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/",
});

export const fetchRecipeList = (
  pageNo,
  isIncorrect,
  isUntagged,
  idDisabled
) => {
  return list.get("/recipes/", {
    params: {
      page: pageNo,
      is_incorrect: isIncorrect,
      is_untagged: isUntagged,
      id_disabled: idDisabled,
    },
  });
};

export const fetchRecipeByMargin = (order, limit) => {
  return list.get("/margin-group/", {
    params: {
      order: order,
      limit: limit,
    },
  });
};

export const fetchRecipeByFluctuation = (order) => {
  return list.get("/fluctuation-group/", {
    params: {
      order: order,
    },
  });
};

export default list;
