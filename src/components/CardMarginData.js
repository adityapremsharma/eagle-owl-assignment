import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function CardData(props) {
  const {
    data: { name, margin, fluctuation },
    color,
  } = props;

  const meterValue = margin ? margin : fluctuation;

  return (
    <div className="card_body_column">
      <div className="card_body_column_title">
        <p>{name}</p>
      </div>
      <div className="card_body_column_meter">
        {margin ? (
          <div style={{ width: "6rem" }}>
            <CircularProgressbar
              styles={{
                text: {
                  fill: color,
                },
                path: {
                  stroke: color,
                },
              }}
              value={meterValue}
              text={`${meterValue}%`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
