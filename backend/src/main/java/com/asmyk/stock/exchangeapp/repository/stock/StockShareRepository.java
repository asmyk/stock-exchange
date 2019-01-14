package com.asmyk.stock.exchangeapp.repository.stock;

import java.util.List;

import com.asmyk.stock.exchangeapp.entities.stock.StockShareEntity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockShareRepository extends CrudRepository<StockShareEntity, Long> {
    List<StockShareEntity> getTickers();
}