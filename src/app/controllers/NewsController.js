
class NewsController {

    index(req, res) {
        res.render('search');
    }

    show(req, res) {
        res.send('New Detail!');
    }
}

module.exports = new NewsController;