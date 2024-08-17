import { z } from 'zod';

export const ShipmentSchema = z.object({
  shipmentId: z.string().uuid(),
  customerId: z.string().uuid(),
  // origin: z.object({
  //   latitude: z.number().min(-90).max(90),
  //   longitude: z.number().min(-180).max(180),
  //   address: z.string().optional(),
  // }),
  // destination: z.object({
  //   latitude: z.number().min(-90).max(90),
  //   longitude: z.number().min(-180).max(180),
  //   address: z.string().optional(),
  // }),
  departureLocation: z.string(),
  departureLatitude: z.number().min(-90).max(90),
  departureLongitude: z.number().min(-180).max(180),
  arrivalLocation: z.string(),
  departureTime: z.date(),
  estimatedArrivalTime: z.date(),
  status: z.enum(["loading", "in_transit", "customs_check", "delivered", "returned"]),
});

// Zod 스키마로부터 TypeScript 타입을 추론
export type Shipment = z.infer<typeof ShipmentSchema>;