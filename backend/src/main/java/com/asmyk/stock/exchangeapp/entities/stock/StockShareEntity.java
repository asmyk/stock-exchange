package com.asmyk.stock.exchangeapp.entities.stock;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class StockShareEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, unique = true)
    private String symbol;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private long priceValue;

    public StockShareEntity(String name, String symbol, long value) {
        this.setName(name);
        this.setSymbol(symbol);
        this.setPriceValue(value);
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSymbol() {
        return this.symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPriceValue() {
        return this.priceValue;
    }

    public void setPriceValue(long value) {
        this.priceValue = value;
    }
}