import Ember from 'ember';

export function starRating(params/*, hash*/) {
  var item = params[0];
  var star = "Not rated yet";

  if (item.get('rating') !== "") {
    star = "";
    for (var i = 0; i < 5 && i < item.get('rating') ; i++) {
      star = star + '<span class="glyphicon glyphicon-star"></span>';
    }
  }


  return Ember.String.htmlSafe(star);
}

export default Ember.Helper.helper(starRating);
