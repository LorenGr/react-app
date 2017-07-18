var express = require('express'),
    router = express.Router(),
    Item = require('../model/items');

//now we can set the route path & initialize the API
router.get('/', function (req, res) {
    res.json({message: 'API Initialized!'});
});

router.route('/items')
    .get(function (req, res) {
        Item.collection.stats().then((stats) => {
            Item.find()
                .limit(Number(req.query.limit) || null)
                .exec(function (err, items) {
                    if (err) return console.error(err);
                    stats.count > items.length ?
                        res.status(206).json(items) : res.json(items);
                });
        });
    })
    .post(function (req, res) {
        var item = new Item();

        //body parser lets us use the req.body
        item.about = req.body.about;
        item.full_name = req.body.full_name;
        item.photo = req.body.photo;
        item.location = req.body.location;
        item.email = req.body.email;
        item.telephone = req.body.telephone;
        item.contact_method = req.body.contact_method;
        item.hourly_rate = req.body.hourly_rate;
        item.available_hours = req.body.available_hours;
        item.available_days = req.body.available_days;
        item.age = req.body.age;
        item.about = req.body.about;
        item.breed_exceptions = req.body.breed_exceptions;
        item.max_dogs = req.body.max_dogs;

        item.save(function (err) {
            if (err) res.send(err);
            res.json({message: 'Item successfully added!'});
        });
    });

module.exports = router;