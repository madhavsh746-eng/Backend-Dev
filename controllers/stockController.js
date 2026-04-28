const StockModel = require("../models/stock");
const { getStockPrice } = require("../helpers/stockvalid"); 

exports.buyStock = async (req, res) => {
    try {
        let { symbol, name, quantity } = req.body;

        //  Validation
        if (!symbol || !name || !quantity) {
            return res.status(400).json({
                success: false,
                message: "Symbol, name and quantity are required"
            });
        }

        
        const stockData = await getStockPrice(symbol);
        const price = stockData.c; 

        if (!price) {
            return res.status(400).json({
                success: false,
                message: "Invalid stock symbol"
            });
        }

        //  Create stock entry
        let stock = await StockModel.create({
            symbol,
            name,
            price,
            quantity,
            
        });

        return res.status(201).json({
            success: true,
            message: "Stock bought successfully (live price)",
            data: stock
        });

    } catch (error) {
        console.error("BUY STOCK ERROR:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};