const ProductRef = require("../models/product.model");

exports.createProduct = function(req, res) {
    req.fields.price = parseFloat(req.fields.price);
    req.fields.weight = parseFloat(req.fields.weight);

    ProductRef.add({
        ...req.fields
    }).then(ref => {
        ref.get().then(doc => {
            res.status(201).json(doc.data());
        });
    }).catch(err => res.json(err));
};

exports.getAllProducts = function(req, res) {
    ProductRef.get().then(docs => {
        const outJson = [];
        docs.forEach(doc => outJson.push(doc.data()));
        res.json(outJson);
    });
};

exports.getSingleProduct = function(req, res) {
    ProductRef.where("sku", "==", req.params.sku).get().then(ref => res.json(ref.forEach(doc => res.json(doc.data()))));
};

exports.deleteProduct = function(req, res) {
    ProductRef.where("sku", "==", req.params.sku).get().then(docs =>
        docs.forEach(doc => {doc.ref.delete(); }))
        .catch(err => res.status(500).json({ message: err }));

    res.status(204).end();
};

exports.updateProduct = function(req, res) {
    req.fields.price = parseFloat(req.fields.price);
    req.fields.weight = parseFloat(req.fields.weight);

    ProductRef.where("sku", "==", req.params.sku).get().then(docs => {
        docs.forEach(doc => {
            doc.ref.update({
                ...req.fields
            });
        });
    }).catch(err => res.status(500).json({ message: err }));

    res.status(202).end();
};