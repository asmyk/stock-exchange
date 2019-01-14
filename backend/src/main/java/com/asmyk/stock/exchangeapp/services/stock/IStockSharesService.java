package com.asmyk.stock.exchangeapp.services.stock;

import java.util.List;
import com.asmyk.stock.exchangeapp.entities.stock.StockShareEntity;

public interface IStockSharesService {
    public List<StockShareEntity> getAllTickers();
}