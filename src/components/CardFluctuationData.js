import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function CardFluctuationData(props) {
  const {
    data: { name, fluctuation },
    color,
  } = props;

  return (
    <div className="card_body_column">
      <div className="card_body_column_title">
        <p>{name}</p>
      </div>
      <div className="card_body_column_meter">
        <div className="card_body_column_meter_arrow">
          <i className="fas fa-arrow-up" style={{ color: "#11953E" }}></i>
          <p style={{ color: "#11953E" }}>{fluctuation}%</p>
        </div>
      </div>
    </div>
  );
}
