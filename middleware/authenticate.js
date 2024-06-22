import { ErrorMessage, HeaderKeys } from "../common/constants.js";
import { models } from "../models/models.js";


export const Authenticate = async (req, res, next) => {

    const secretToken = req.headers[HeaderKeys.CL_X_TOKEN];

    if (!secretToken) {
        return res.status(401).json({ message: ErrorMessage.UnauthorizedToken });
    }

    try {

        const account = await models.Account.findOne({ where: { secretToken: secretToken } });
        
        if (!account) {
            return res.status(401).json({ error: ErrorMessage.UnauthorizedToken });
        }
        req.account = account;

        next();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 