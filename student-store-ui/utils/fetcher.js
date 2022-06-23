import axios from "axios";

export const fetcher = async (
    url, 
    method = "get",
    headers = {},
    ownConfig = false
    ) => {
        const config = ownConfig ? ownConfig : {
            method,
            headers
        };

        const response = await axios[method](url, config);
        return response;
    };