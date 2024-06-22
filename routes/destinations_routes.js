import express from "express";
import { APIExtensions } from "../apicommunicators/apiextensions.js";
import { CreateDestination, DeleteDestination, GetDestination, GetDestinations, UpdateDestination } from "../controllers/destinations_controller.js";
export const DestinationRoutes = express.Router();

DestinationRoutes.post(APIExtensions.Destinations.V1.CreateDestination, CreateDestination);
DestinationRoutes.get(APIExtensions.Destinations.V1.GetDestination, GetDestination);
DestinationRoutes.put(APIExtensions.Destinations.V1.UpdateDestination, UpdateDestination);
DestinationRoutes.delete(APIExtensions.Destinations.V1.DeleteDestination, DeleteDestination);
DestinationRoutes.get(APIExtensions.Destinations.V1.GetDestinations, GetDestinations);
