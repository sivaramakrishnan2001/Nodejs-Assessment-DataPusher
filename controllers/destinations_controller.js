import { models } from "../models/models.js";
//  "Content-Type: application/json" -H "CL-X-TOKEN: ACCOUNT_SECRET_TOKEN" -d '{"key": "value"}'

export const CreateDestination = async (req, res) => {
    try {
        const account = await models.Account.findByPk(req.body.accountId);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        const destination = await models.Destination.create(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetDestinations = async (req, res) => {
    try {
        const destinations = await models.Destination.findAll();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetDestination = async (req, res) => {
    try {
        const account = await models.Account.findByPk(req.params.accountId, {
            include: models.Destination
        });
        if (account) {
            res.status(200).json(account.Destinations);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const UpdateDestination = async (req, res) => {
    try {
        const destination = await models.Destination.findByPk(req.params.id);
        if (destination) {
            await destination.update(req.body);
            res.status(200).json(destination);
        } else {
            res.status(404).json({ message: 'Destination not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeleteDestination = async (req, res) => {
    try {
        const destination = await models.Destination.findByPk(req.params.id);
        if (destination) {
            await destination.destroy();
            res.status(204).json({ message: 'Successfully Deleted Destination' });
        } else {
            res.status(404).json({ message: 'Destination not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}