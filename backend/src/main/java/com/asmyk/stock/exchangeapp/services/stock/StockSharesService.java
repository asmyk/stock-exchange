package com.asmyk.stock.exchangeapp.services.stock;

import java.util.List;

import com.asmyk.stock.exchangeapp.entities.stock.StockShareEntity;
import com.asmyk.stock.exchangeapp.repository.stock.StockShareRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockSharesService implements IStockSharesService {

    @Autowired
    private StockShareRepository stockShareRepository;

    @Override
    public List<StockShareEntity> getAllTickers() {
        return stockShareRepository.getTickers();
    }

    public void addStockShare(String name, String symbol, Long price) {
        stockShareRepository.save(new StockShareEntity(name, symbol, price));
    }
}