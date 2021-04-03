export default function Row(props) {
  const {
    data: { name, last_updated, cogs, cost_price, sale_price, gross_margin },
    checked,
  } = props;

  const extractedDate = new Date(last_updated.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <tr>
      <td>
        <input type="checkbox" checked={checked || null} />
      </td>
      <td>{name}</td>
      <td>{extractedDate}</td>
      <td className="align-right">{cogs}%</td>
      <td className="align-right">{cost_price.toFixed(2)}</td>
      <td className="align-right">{sale_price.toFixed(2)}</td>
      <td className="align-right">{gross_margin.toFixed(2)}%</td>
      <td>NA</td>
    </tr>
  );
}
