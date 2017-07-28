module.exports=(function() {
	var _online={}, _online_userkeys=null, _dirty=true;
	var o={
		add:function(user) {
			var u=_online[user.id];
			if (u) {
				user.copyfrom(u);
				u.send({c:'kicked', reason:'账号在其他地方登录了'});
				u.ws.close();
			}
			_online[user.id]=user;
			_dirty=true;
		},
		remove:function(user) {
			if (_online[user.id]==user) {
				_online[user.id].quit();
				if (user.table==null) {
					delete _online[user.id];
					_dirty=true;
				}
			}
		},
        get:function(id) {
            return _online[id];
        }
	};
	Object.defineProperties(o, {
		length:{
			get:function() {
				if (!_dirty) return _online_userkeys.length;
				_online_userkeys=Object.keys(_online);
				_dirty=false;
				return _online_userkeys.length; 
			}
		},
		all:{
			get:function() {
				if (!_dirty) return _online_userkeys;
				_online_userkeys=Object.keys(_online);
				_dirty=false;
				return _online_userkeys; 
			}
		}
	});
	return o;
})();