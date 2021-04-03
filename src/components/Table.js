import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./Loading";
import { fetchRecipeList } from "../apis/Api";
import { recipe, active } from "./Functions";
// import Row from "./Row";
const Row = lazy(() => import("./Row"));

export default function Table() {
  const [recipeData, setRecipeData] = useState([]);

  const [typeOfRecipe, setTypeOfRecipe] = useState({
    pageNo: 1,
    isIncorrect: null,
    isUntagged: null,
    idDisabled: null,
  });

  const [isActive, setIsActive] = useState({
    allRecipeButton: true,
    incorrectButton: false,
    untaggedButton: false,
    disabledButton: false,
  });

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const { pageNo, isIncorrect, isUntagged, idDisabled } = typeOfRecipe;
    fetchRecipeList(pageNo, isIncorrect, isUntagged, idDisabled)
      .then((res) => setRecipeData(res.data.results))
      .catch((err) => console.log(err));
  }, [typeOfRecipe]);

  const allRecipe = () => {
    setTypeOfRecipe(recipe(1, null, null, null));

    setIsActive(active(true, false, false, false));

    setChecked(false);
  };

  const Incorrect = () => {
    setTypeOfRecipe(recipe(1, true, null, null));

    setIsActive(active(false, true, false, false));

    setChecked(false);
  };

  const untagged = () => {
    setTypeOfRecipe(recipe(1, null, true, null));

    setIsActive(active(false, false, true, false));

    setChecked(false);
  };

  const disabled = () => {
    setTypeOfRecipe(recipe(1, null, null, true));

    setIsActive(active(false, false, false, true));

    setChecked(false);
  };

  const {
    allRecipeButton,
    incorrectButton,
    untaggedButton,
    disabledButton,
  } = isActive;

  return (
    <>
      <div className="btn-container">
        <div
          className="btn"
          style={
            allRecipeButton ? { backgroundColor: "#fff", zIndex: "1000" } : null
          }
          onClick={allRecipe}
        >
          <p>All Recipe(s)</p>
        </div>
        <div
          className="btn"
          style={
            incorrectButton ? { backgroundColor: "#fff", zIndex: "1000" } : null
          }
          onClick={Incorrect}
        >
          <p>Incorrect</p>
        </div>
        <div
          className="btn"
          style={
            untaggedButton ? { backgroundColor: "#fff", zIndex: "1000" } : null
          }
          onClick={untagged}
        >
          <p>Untagged</p>
        </div>
        <div
          className="btn"
          style={
            disabledButton ? { backgroundColor: "#fff", zIndex: "1000" } : null
          }
          onClick={disabled}
        >
          <p>Disabled</p>
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>
              <input
                type="checkbox"
                onClick={() => setChecked(!checked)}
                checked={checked}
              />
            </th>
            <th>Name</th>
            <th>Last Updated</th>
            <th className="align-right">COGS %</th>
            <th className="align-right">Cost Price (')</th>
            <th className="align-right">Sale Price</th>
            <th className="align-right">Gross Margin</th>
            <th>Tags / Actions</th>
          </tr>
          <Suspense fallback={<LoadingSpinner />}>
            {recipeData.map((data) => (
              <Row key={data.id} data={data} checked={checked} />
            ))}
          </Suspense>
        </table>
      </div>
    </>
  );
}
