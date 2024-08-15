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
      <h1>Shipment Tracking System</h1>
      <ShipmentForm onAddShipment={addShipment} />
      <ShipmentList shipments={shipments} />
    </div>
  );
};

export default ShipmentTrackingSystem;