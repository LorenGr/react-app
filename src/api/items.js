export default class ApiItems {

    static getList(action) {
        const timeout = 1000;
        return new Promise(resolve => {

            var items = [];

            for (let index = 0; index <= 30; index++) {
                items.push({
                    id: index,
                    from: "recipient" + index,
                    recipient: "recipient" + index,
                    subject: 'BILL PAYMENTS',
                    bundle: "financial",
                    date: new Date()
                });
            }

            setTimeout(() => {
                resolve(items);
            }, timeout);
        });
    }
}