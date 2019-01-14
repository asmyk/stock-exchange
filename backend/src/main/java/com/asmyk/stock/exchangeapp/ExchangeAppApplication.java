package com.asmyk.stock.exchangeapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.asmyk.stock.exchangeapp.entities.stock.StockShareEntity;
import com.asmyk.stock.exchangeapp.markets.StockMarket;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExchangeAppApplication {

	private static final Logger log = LoggerFactory.getLogger(ExchangeAppApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StockMarket.class, args);
	}
}
