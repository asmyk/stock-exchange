
class InstrumentsService {

    randomQuotes() {
        const names = ['US500', 'Nasdaq', 'DAX', 'CAC'];
        let result = [];

        function generateRandomNumber(min, max) {

            let random_number = Math.random() * (max - min) + min;
            return Math.floor(random_number);
        }

        for (let i = 0; i < names.length; i++) {
            const price = generateRandomNumber(1000, 10000);
            result.push({ name: names[i], buyPrice: price + 10, sellPrice: price - 10 })
        }
        return result;
    }

    getQuotes() {
        return this.randomQuotes();
    }
}

export { InstrumentsService };