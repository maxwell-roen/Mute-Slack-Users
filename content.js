window.setInterval(function() {
	for(var i = 0; i < users.length; i++) {
		var user = 'a[href=\"/team/' + users[i] + '\"]'
		var posts = $(user)
		var parents = posts.parent()
		var gParents = parents.parent()
		var ggParents = gParents.parent()
		$(posts).hide()
		$(parent).hide()
		$(gParents).hide()
		$(ggParents).hide()
	}
}, 100)

