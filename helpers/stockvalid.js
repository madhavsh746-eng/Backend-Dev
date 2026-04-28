const axios = require("axios");

exports.getStockPrice = async (symbol) => {
    try {
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.STOCK_API_KEY}`);

        return response.data; 
    } catch (error) {
        console.error("Stock API Error:", error.message);
        throw error;
    }
};