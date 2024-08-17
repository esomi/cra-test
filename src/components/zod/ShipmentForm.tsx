import {Button, Input, Select, SelectProps } from "antd";
import { useState } from "react";
import { z } from 'zod';
import { Shipment, ShipmentSchema } from "./types";
import './ShipmentForm.css';
// 새로운 화물을 추가하는 폼
const ShipmentForm: React.FC<{ onAddShipment: (shipment: Shipment) => void }> = ({ onAddShipment }) => {
  const [formData, setFormData] = useState<Partial<Shipment>>({});
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const { Option } = Select;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('formData:', formData)
      // Zod 스키마를 사용하여 formData를 검증
      const validatedShipment = ShipmentSchema.parse({
        ...formData,
        shipmentId: crypto.randomUUID(), // 임의의 UUID 생성
        customerId: crypto.randomUUID(), // 임의의 UUID 생성
        departureTime: new Date(formData.departureTime || ''),
        estimatedArrivalTime: new Date(formData.estimatedArrivalTime || ''),
        departureLatitude: Number(formData.departureLatitude),
        departureLongitude: Number(formData.departureLongitude),
      });
      onAddShipment(validatedShipment);
      // setFormData({}); // 폼 초기화
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        // 오류 메시지를 필드별로 정리
        const errorMessages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
        // 상태에 오류 메시지 저장
        setFieldErrors(errorMessages);
        alert(`입력 데이터가 유효하지 않습니다. 다음 항목을 확인해주세요:\n${errorMessages.join('\n')}`);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if(fieldErrors.length > 0) setFieldErrors([]);
    const { name, value } = e.target;
    // number input 처리
    if (e.target.type === 'number') {
      // 빈 문자열이면 undefined로 설정
      const numberValue = value === '' ? undefined : parseFloat(value);
      setFormData(prev => ({
        ...prev,
        [name]: numberValue
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange: SelectProps['onChange'] = (value) => {
    setFormData(prev => ({
      ...prev,
      status: value as Shipment['status']
    }));
  };

  return (
    <div className="shipment-form">
      <h2>Add New Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="departureLocation">Departure Location</label>
          <Input
            id="departureLocation"
            name="departureLocation"
            type="text"
            placeholder="Departure Location"
            onChange={handleChange}
            value={formData.departureLocation || ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureLatitude">Departure Latitude</label>
          <Input
            id="departureLatitude"
            name="departureLatitude"
            type="number"
            min="-90"
            max="90"
            step="0.0001"
            placeholder="Departure Latitude"
            onChange={handleChange}
            value={formData.departureLatitude ?? ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureLongitude">Departure Longitude</label>
          <Input
            id="departureLongitude"
            name="departureLongitude"
            type="number"
            min="-180"
            max="180"
            step="0.0001"
            placeholder="Departure Longitude"
            onChange={handleChange}
            value={formData.departureLongitude ?? ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalLocation">Arrival Location</label>
          <Input
            id="arrivalLocation"
            name="arrivalLocation"
            type="text"
            placeholder="Arrival Location"
            onChange={handleChange}
            value={formData.arrivalLocation || ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureTime">Departure Time</label>
          <Input
            id="departureTime"
            name="departureTime"
            type="datetime-local"
            placeholder="Departure Time"
            onChange={handleChange}
            value={formData.departureTime?.toString() || ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedArrivalTime">Estimated Arrival Time</label>
          <Input
            id="estimatedArrivalTime"
            name="estimatedArrivalTime"
            type="datetime-local"
            placeholder="Estimated Arrival Time"
            onChange={handleChange}
            value={formData.estimatedArrivalTime?.toString() || ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <Select id="status"
                  style={{ width: '100%' }}
                  onChange={handleSelectChange}
          >
            <Option value="">Select Status</Option>
            <Option value="loading">Loading</Option>
            <Option value="in_transit">In Transit</Option>
            <Option value="customs_check">Customs Check</Option>
            <Option value="delivered">Delivered</Option>
            <Option value="returned">Returned</Option>
          </Select>
        </div>
        <div className="form-actions">
          <Button type="primary" htmlType="submit">Add Shipment</Button>
          <Button onClick={() => setFormData({})}>Clear</Button>
        </div>
        <ul className="error-list">
          {fieldErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ShipmentForm;