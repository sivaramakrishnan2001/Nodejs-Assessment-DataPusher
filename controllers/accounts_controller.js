import { models } from "../models/models.js";

export const CreateAccount = async (req, res) => {
    try {
        const account = await models.Account.create(req.body);
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAccounts = async (req, res) => {
    try {
        const accounts = await models.Account.findAll();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAccount = async (req, res) => {
    try {
        const account = await models.Account.findByPk(req.params.id);
        if (account) {
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const UpdateAccount = async (req, res) => {
    try {
        const account = await models.Account.findByPk(req.params.id);
        if (account) {
            await account.update(req.body);
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeleteAccount = async (req, res) => {
    try {
        const account = await models.Account.findByPk(req.params.id);
        if (account) {
            await account.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}