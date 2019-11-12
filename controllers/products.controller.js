const ProductRef = require("../models/product.model");

exports.createProduct = async function(req, res) {
    req.fields.price = parseFloat(req.fields.price);
    req.fields.weight = parseFloat(req.fields.weight);

    try {
        await ProductRef.add({
            ...req.fields
        });
        const doc = await ref.get();
        res.status(201).json(doc.data());
    }
    catch(err) {
        res.status(500).end();
    }
};

exports.getAllProducts = async function(req, res) {
    try {
        const refs = await ProductRef.get();
        const outJson = [];
        refs.forEach(doc => outJson.push(doc.data()));
        res.status(200).json(outJson);
    }
    catch(err) {
        res.status(500).end();
    }
};

exports.getSingleProduct = async function(req, res) {
    try {
        const refs = await ProductRef.where("sku", "==", req.params.sku).get();
        res.json(refs[0].data());
    }
    catch(err) {
        ref.status(500).end();
    }
};

exports.deleteProduct = async function(req, res) {
    try {
        const refs = await ProductRef.where("sku", "==", req.params.sku).get();
        refs.forEach(doc => {doc.ref.delete(); });
    
        res.status(204).end();
    }
    catch(err) {
        res.status(500).end();
    }
};

exports.updateProduct = async function(req, res) {
    req.fields.price = parseFloat(req.fields.price);
    req.fields.weight = parseFloat(req.fields.weight);

    try {
        const refs = await ProductRef.where("sku", "==", req.params.sku).get();
        refs.forEach(doc => {
            doc.ref.update({
                ...req.fields
            });
        });

        res.status(202).end();
    }
    catch(err) {
        res.status(500).end();
    }
};