#  Projeto em nodejs

- Conversor de moedas


    A conversão aceita um ou varios pares no endereço da url **https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL**, retornando os detalhes dos pares.




```
{
    "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": "5.3389",
        "low": "5.3378",
        "varBid": "0.0008",
        "pctChange": "0.02",
        "bid": "5.3381",
        "ask": "5.3386",
        "timestamp": "1619730002",
        "create_date": "2021-04-29 21:00:03"
    },
    "EURBRL": {
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro/Real Brasileiro",
        "high": "6.4738",
        "low": "6.4684",
        "varBid": "0.0023",
        "pctChange": "0.04",
        "bid": "6.4698",
        "ask": "6.4709",
        "timestamp": "1619752457",
        "create_date": "2021-04-30 00:14:21"
    },
    "BTCBRL": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": "294400",
        "low": "282360",
        "varBid": "-4580.1",
        "pctChange": "-1.56",
        "bid": "288809.9",
        "ask": "288809.9",
        "timestamp": "1619752461",
        "create_date": "2021-04-30 00:14:21"
    }
}

```