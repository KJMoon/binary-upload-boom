module.exports = {
  getIndex: (req, res) => {
    res.render("index", { name: 'John Doe' });
  },
};
