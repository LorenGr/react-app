import assert from 'assert';
import items from '../../src/reducers/items';

describe("Items Reducer", () => {
    describe("Add Item", () => {
        it("should return list with added item", () => {
            const state = {
                list: {
                    data: [
                        {
                            from: "Loren",
                            recipient: "Bank",
                            subject: 'Loans',
                        }
                    ]
                }
            };
            const action = {
                type: "ITEM_ADD_SUCCESS",
                items: {
                    data: {
                        from: "Loren",
                        recipient: "School",
                        subject: "Tuition"
                    }
                }
            };

            const expected = {
                list: {
                    data: [
                        {
                            from: "Loren",
                            recipient: "Bank",
                            subject: 'Loans',
                        }, {
                            from: "Loren",
                            recipient: "School",
                            subject: "Tuition"
                        }

                    ]
                }
            };


            assert.deepEqual(items(state, action), expected);
        });
    });

    describe("Edit Item", () => {
        it("edit an existing item", () => {
            const state = {
                list: {
                    data: [
                        {
                            _id: 0,
                            from: "Loren",
                            recipient: "Bank",
                            subject: 'Loans',
                        }, {
                            _id: 1,
                            from: "Loren",
                            recipient: "School",
                            subject: "Tuition"
                        }
                    ]
                }
            };
            const action = {
                type: "ITEM_EDIT_SUCCESS",
                items: {
                    data: {
                        _id: 1,
                        recipient: "Students",
                        subject: "Fees"
                    }
                }

            };

            const expected = {
                list: {
                    data: [
                        {
                            _id: 0,
                            from: "Loren",
                            recipient: "Bank",
                            subject: 'Loans',
                        }, {
                            _id: 1,
                            from: "Loren",
                            recipient: "Students",
                            subject: "Fees"
                        }
                    ]
                }
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