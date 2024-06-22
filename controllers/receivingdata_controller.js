import axios from "axios";
import { models } from "../models/models.js";
import { ErrorMessage } from "../common/constants.js";


export const GetReceivingData = async (req, res) => {
    let data = req.body;
    try {
        const destinations = await models.Destination.findAll({ where: { AccountId: req.account.id } });

        const promises = destinations.map((destination) => {
            const { url, method, headers } = destination;
            const config = { headers };

            if (method === 'GET') {
                const params = new URLSearchParams(data).toString();
                return axios.get(`${url}?${params}`, config)
                    .then(response => ({ url, status: response.status }))
                    .catch(error => ({ url, status: error.response ? error.response.status : ErrorMessage.NetworkError }));
            } else {
                return axios({ method, url, data, ...config })
                    .then(response => ({ url, status: response.status }))
                    .catch(error => ({ url, status: error.response ? error.response.status : ErrorMessage.NetworkError }));
            }
        });

        const results = await Promise.all(promises);

        res.json({ message: 'Data sent to all destinations', results });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}