import { useState, useEffect } from "react";
import { fetchRecipeByMargin, fetchRecipeByFluctuation } from "../apis/Api";
import Card from "./Card";
export default function Status() {
  const [highMarginRecipes, setHighMarginRecipes] = useState([]);
  const [lowMarginRecipes, setLowMarginRecipes] = useState([]);
  const [topFluctuatingRecipes, setTopFluctuatingRecipes] = useState([]);
  // const [bottomFluctuatingRecipes, setBottomFluctuatingRecipes] = useState([]);
  useEffect(() => {
    fetchRecipeByMargin("top")
      .then((res) => setHighMarginRecipes(res.data.results))
      .catch((err) => console.log(err));

    fetchRecipeByMargin("bottom")
      .then((res) => setLowMarginRecipes(res.data.results))
      .catch((err) => console.log(err));

    fetchRecipeByFluctuation("top")
      .then((res) => setTopFluctuatingRecipes(res.data.results))
      .catch((err) => console.log(err));

    // fetchRecipeByFluctuation("bottom").then((res) =>
    //   setBottomFluctuatingRecipes(res.data.results)
    // );
  }, []);

  return (
    <div className="status">
      <Card marginSummaryData={highMarginRecipes} meterColor="#11953E" />
      <Card marginSummaryData={lowMarginRecipes} meterColor="#E40F0E" />
      <Card
        fluctuatingTopSummaryData={topFluctuatingRecipes}
        // fluctuatingBottomSummaryData={bottomFluctuatingRecipes}
      />
    </div>
  );
}
