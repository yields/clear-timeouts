
/**
 * Clear all timeouts
 *
 * @api public
 */

module.exports = function(){
  var i = setTimeout(function(){});
  while (i--) clearTimeout(i);
};
