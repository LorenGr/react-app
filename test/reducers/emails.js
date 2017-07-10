import assert from 'assert';
import emails from '../../src/reducers/emails';

describe("Emails Reducer", () => {
    describe("Add Item", () => {
        it("should return list with added item", () => {
            const state = {
                list: [
                    {
                        id: 0,
                        from: "Loren",
                        recipient: "Bank",
                        subject: 'Loans',
                        bundle: "financial",
                        date: "15012008"

                    }
                ]
            };
            const action = {
                type: "EMAILS_ADD",
                date: "15012008",
                id: 2,
                recipient: "School",
                subject: "Tuition"
            };

            const expected = {
                list: [
                    {
                        id: 0,
                        from: "Loren",
                        recipient: "Bank",
                        subject: 'Loans',
                        bundle: "financial",
                        date: "15012008"
                    }, {
                        id: 2,
                        from: "Loren",
                        bundle: "Inbox",
                        date: "15012008",
                        recipient: "School",
                        subject: "Tuition"
                    }

                ]
            };

            assert.deepEqual(emails(state, action), expected);
        });
    })
});