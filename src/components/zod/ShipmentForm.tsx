import { useState } from "react";
import { z } from 'zod';
import { Shipment, ShipmentSchema } from "./types";

// 새로운 화물을 추가하는 폼
const ShipmentForm: React.FC<{ onAddShipment: (shipment: Shipment) => void }> = ({ onAddShipment }) => {
  const [formData, setFormData] = useState<Partial<Shipment>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Zod 스키마를 사용하여 formData를 검증
      const validatedShipment = ShipmentSchema.parse({
        ...formData,
        shipmentId: crypto.randomUUID(), // 임의의 UUID 생성
        customerId: crypto.randomUUID(), // 임의의 UUID 생성
        departureTime: new Date(formData.departureTime || ''),
        estimatedArrivalTime: new Date(formData.estimatedArrivalTime || ''),
      });
      onAddShipment(validatedShipment);
      setFormData({}); // 폼 초기화
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        alert('입력 데이터가 유효하지 않습니다. 다시 확인해주세요.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="origin.latitude"
        type="number"
        placeholder="Origin Latitude"
        onChange={handleChange}
        value={formData.origin?.latitude || ''}
      />
      <input
        name="origin.longitude"
        type="number"
        placeholder="Origin Longitude"
        onChange={handleChange}
        value={formData.origin?.longitude || ''}
      />
      <input
        name="destination.latitude"
        type="number"
        placeholder="Destination Latitude"
        onChange={handleChange}
        value={formData.destination?.latitude || ''}
      />
      <input
        name="destination.longitude"
        type="number"
        placeholder="Destination Longitude"
        onChange={handleChange}
        value={formData.destination?.longitude || ''}
      />
      <input
        name="departureTime"
        type="datetime-local"
        placeholder="Departure Time"
        onChange={handleChange}
        value={formData.departureTime?.toString() || ''}
      />
      <input
        name="estimatedArrivalTime"
        type="datetime-local"
        placeholder="Estimated Arrival Time"
        onChange={handleChange}
        value={formData.estimatedArrivalTime?.toString() || ''}
      />
      <select name="status" onChange={handleChange} value={formData.status || ''}>
        <option value="">Select Status</option>
        <option value="loading">Loading</option>
        <option value="in_transit">In Transit</option>
        <option value="customs_check">Customs Check</option>
        <option value="delivered">Delivered</option>
        <option value="returned">Returned</option>
      </select>
      <button type="submit">Add Shipment</button>
    </form>
  );
};

export default ShipmentForm;
