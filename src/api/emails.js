export default class ApiEmails {

    static getList(action) {
        const timeout = 1000;
        return new Promise(resolve => {

            var emails = [];

            for (let index = 0; index <= 30; index++) {
                emails.push({
                    id: index,
                    from: "recipient" + index,
                    recipient: "recipient" + index,
                    subject: 'BILL PAYMENTS',
                    bundle: "financial",
                    date: new Date()
                });
            }

            setTimeout(() => {
                resolve(emails);
            }, timeout);
        });
    }
}