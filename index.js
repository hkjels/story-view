
/**
 * Module dependencies.
 */

var Card = require('scrumcard')
  , View = require('view')
  , domify = require('domify')
  , templ = domify(require('./template'));


/**
 * Expose `StoryView`.
 */

module.exports = StoryView;


function StoryView(story) {
  View.call(this, story, templ.cloneNode(true));
  this.obj.tasks.forEach(function(task) {
    this.addCard(task);
  }.bind(this));
}

StoryView.prototype.__proto__ = View.prototype;

StoryView.prototype.addCard = function(task) {
  var card = new Card(task);
  var section = this.el.querySelector("." + task.state());
  section.appendChild(card.el);
};

