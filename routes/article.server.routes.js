module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.1.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


app.route('/articles/all').get(articles.listView)
app.route('/article/:articleId').get(articles.singleview)
app.route('/article/:new').get(articles.createView)

app.param('articleId', articles.articleByID);


}
