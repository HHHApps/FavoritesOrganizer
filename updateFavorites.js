$( document ).ready(function() {
	var posts = $('body').find(".post");
	
	console.log(posts);
	
	//https://api.imgur.com/3/account/{username}/favorites
	//Gallery Image OR Gallery Album, Note: vote data ('ups', 'downs', and 'score') may be null if the favorited item hasn't been submitted to gallery
	//$.debounce(onKeyUp, 300)
});

function markPostAsSeent(seentPosts){
	var path = window.location.pathname;
	var galleryId = path.substr(path.lastIndexOf("/") + 1);
	if(!_.contains(seentPosts, galleryId)){
		seentPosts.push(galleryId);

		var saveObj = {val: seentPosts};
		chrome.storage.sync.set({ 'seentIt': saveObj });
	}
}

function saveFavorites() {
	chrome.storage.sync.get("organizedFavorites", function (obj) {
		var savedFavorites = !obj.organizedFavorites ? [] : obj.organizedFavorites.val;

		var saveObj = {val: savedFavorites};
		chrome.storage.sync.set({ 'organizedFavorites': saveObj });
	});
}