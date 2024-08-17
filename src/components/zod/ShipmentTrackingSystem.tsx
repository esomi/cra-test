import {useState} from "react";
import {Shipment} from "./types";
import ShipmentList from "./ShipmentList";
import ShipmentForm from "./ShipmentForm";

const ShipmentTrackingSystem = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  const addShipment = (newShipment: Shipment) => {
    setShipments(prev => [...prev, newShipment]);
  };

  return (
    <div>
      <h3>Shipment Tracking System</h3>
      <ShipmentForm onAddShipment={addShipment} />
      <ShipmentList shipments={shipments} />
    </div>
  );
};

export default ShipmentTrackingSystem;