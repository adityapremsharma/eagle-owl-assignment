import "react-circular-progressbar/dist/styles.css";
import CardMarginData from "./CardMarginData";
import CardFluctuationData from "./CardFluctuationData";

export default function Card(props) {
  const { marginSummaryData, fluctuatingTopSummaryData, meterColor } = props;

  // const arrowColor = fluctuatingTopSummaryData ? "green" : "red";

  return (
    <div className="card">
      <div className="card_heading">
        <h1>High Margin Recipes</h1>
      </div>
      <div className="card_body">
        {marginSummaryData
          ? marginSummaryData.map((data, key) => (
              <CardMarginData key={key} data={data} color={meterColor} />
            ))
          : fluctuatingTopSummaryData.map((data, key) => (
              <CardFluctuationData key={key} data={data} />
            ))}
      </div>
    </div>
  );
}
