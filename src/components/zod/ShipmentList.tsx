import {Shipment} from "./types";

const ShipmentList: React.FC<{ shipments: Shipment[] }> = ({ shipments }) => {
  return (
    <ul>
      {shipments.map((shipment) => (
        <li key={shipment.shipmentId}>
          Shipment ID: {shipment.shipmentId}, Status: {shipment.status}
        </li>ß
      ))}
    </ul>
  );
};

export default ShipmentList;