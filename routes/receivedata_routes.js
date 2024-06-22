import express from "express";
import { APIExtensions } from "../apicommunicators/apiextensions.js";
import { GetReceivingData } from "../controllers/receivingdata_controller.js";

export const ReceiveDataRoutes = express.Router();

ReceiveDataRoutes.get(APIExtensions.ReceivingData.V1.IncomingData, GetReceivingData);
