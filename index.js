var path = require('path');
var flexoPath = require.resolve('./_flexo.scss');

var flexoDir = path.dirname(flexoPath);

function includePaths() {
  return [flexoDir];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
        var paths  = Array.prototype.slice.call(arguments);
        var result = [].concat.apply(includePaths(), paths);
        return result;
      }

};
