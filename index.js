function generate_password(l) {
	var d=(new Date())%42;while(--d>0)Math.random();
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-*+=)(', r = '';
    for (var i = 0, n = chars.length; i < l; ++i) {
        r += chars.charAt(Math.floor(Math.random() * n));
    }
    return r;
}

module.exports = function(len) {return generate_password(len);};
