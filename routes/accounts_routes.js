import express from "express";
import { APIExtensions } from "../apicommunicators/apiextensions.js";
import { CreateAccount, DeleteAccount, GetAccount, GetAccounts, UpdateAccount } from "../controllers/accounts_controller.js";
export const AccountRoutes = express.Router();

AccountRoutes.post(APIExtensions.Accounts.V1.CreateAccount, CreateAccount);
AccountRoutes.get(APIExtensions.Accounts.V1.GetAccounts, GetAccounts);
AccountRoutes.get(APIExtensions.Accounts.V1.GetAccount, GetAccount);
AccountRoutes.put(APIExtensions.Accounts.V1.UpdateAccount, UpdateAccount);
AccountRoutes.delete(APIExtensions.Accounts.V1.DeleteAccount, DeleteAccount);