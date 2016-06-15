import Ember from 'ember';

export function starRating(params/*, hash*/) {
  var item = params[0];
  var star = "";

  for (var i = 0; i < item.get('rating'); i++) {
    star = star + '<span class="glyphicon glyphicon-star"></span>';
  }

  return Ember.String.htmlSafe(star);

  // var htmlString = for (i = 0; i < item.get('rating'), i++) {
  //   '<span class="glyphicon glyphicon-star"></span>'
  // }

  // return Ember.String.htmlSafe(
  //   for (i = 0; i < item.get('rating'), i++) {
  //     '<span class="glyphicon glyphicon-star"></span>'
  //   }
  //
  // );

  // if(item.get('rating') == 1) {
  //   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  // }
}

export default Ember.Helper.helper(starRating);
