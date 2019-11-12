module.exports = function(router) {
	router.get("/", function(req, res) {
		res.json({message: "Exquisite."});
	});
};
