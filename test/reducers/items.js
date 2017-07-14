import assert from 'assert';
import items from '../../src/reducers/items';

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
                type: "ITEM_ADD",
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

            assert.deepEqual(items(state, action), expected);
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
                type: "ITEM_EDIT",
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

            assert.deepEqual(items(state, action), expected);
        });
    });


    describe("Modals", () => {
        it("should set modal delete data when undefined", () => {
            const state = {};
            const action = {
                type: "ITEM_DELETE_MODAL_SHOW",
                id: 2,
                name: "Loren"
            };
            const expected = {
                modal: {
                    ITEM_DELETE: {
                        show: true,
                        id: 2,
                        name: "Loren"
                    }
                }
            };
            assert.deepEqual(items(state, action), expected);

        });
        it("should set modal delete data when defined", () => {
            const state = {
                modal: {
                    ITEM_DELETE: {
                        show: false,
                        id: 0,
                        name: ''
                    }
                }
            };
            const action = {
                type: "ITEM_DELETE_MODAL_SHOW",
                id: 2,
                name: "Loren"
            };
            const expected = {
                modal: {
                    ITEM_DELETE: {
                        show: true,
                        id: 2,
                        name: "Loren"
                    }
                }
            };
            assert.deepEqual(items(state, action), expected);
        });
    });
});