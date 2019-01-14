package com.asmyk.stock.exchangeapp.markets;

import com.asmyk.stock.exchangeapp.services.stock.StockSharesService;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class StockMarket {
    @Autowired
    StockSharesService stockShareService;

    @RequestMapping(value = "/ticker")
    public ResponseEntity<Object> getTicker() {
        return new ResponseEntity<>(stockShareService.getAllTickers(), HttpStatus.OK);
    }

}