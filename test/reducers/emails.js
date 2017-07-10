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
    });

    describe("Edit Item", () => {
        it("edit an existing item", () => {
            const state = {
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
            const action = {
                type: "EMAILS_EDIT",
                date: "15012008",
                id: 2,
                recipient: "Students",
                subject: "Fees"
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
                        recipient: "Students",
                        subject: "Fees"
                    }

                ]
            };

            assert.deepEqual(emails(state, action), expected);
        });
    });

    describe("Modals", () => {
        it("should set modal delete data when undefined", () => {
            const state = {};
            const action = {
                type: "EMAIL_DELETE_MODAL_SHOW",
                id: 2,
                name: "Loren"
            };
            const expected = {
                modal: {
                    EMAIL_DELETE: {
                        show: true,
                        id: 2,
                        name: "Loren"
                    }
                }
            };
            assert.deepEqual(emails(state, action), expected);

        });
        it("should set modal delete data when defined", () => {
            const state = {
                modal: {
                    EMAIL_DELETE: {
                        show: false,
                        id: 0,
                        name: ''
                    }
                }
            };
            const action = {
                type: "EMAIL_DELETE_MODAL_SHOW",
                id: 2,
                name: "Loren"
            };
            const expected = {
                modal: {
                    EMAIL_DELETE: {
                        show: true,
                        id: 2,
                        name: "Loren"
                    }
                }
            };
            assert.deepEqual(emails(state, action), expected);
        });
    });
});