function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;

    const totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

    if (Number(totalCid) < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (Number(totalCid) === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];

    for (let i = cid.length - 1; i >= 0; i--) {
        const coinName = cid[i][0];
        const coinTotal = cid[i][1];
        const coinValue = currencyUnit[coinName];
        let coinCount = (coinTotal / coinValue).toFixed(0);

        let returnedCoins = 0;
        while (changeDue >= coinValue && coinCount > 0) {
            changeDue -= coinValue;
            changeDue = changeDue.toFixed(2);
            coinCount--;
            returnedCoins++;
        }

        if (returnedCoins > 0) {
            change.push([coinName, returnedCoins * coinValue]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}

