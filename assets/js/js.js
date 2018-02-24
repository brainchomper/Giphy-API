var topics = ['South Park', 'Rick & Morty', 'Archer', 'Game Of Thrones'];

//display topics array into buttons
function makeGifBtns() {
	//empty gif btns on page and repopulate
	$('#topicBtns').empty();
	for (var i = 0; i < topics.length; i++) {
		var button = $('<button>');
		button.addClass('displayGifs');
		button.addClass('btn btn-info');
		button.attr('data-name', topics[i]);
		button.text(topics[i]);
		$('#topicBtns').append(button);
	}
}
//add new topics on click
function newTopics() {
$('#addTopic').on('click', function (event) {
	event.preventDefault();
	var topic = $('#topicInput').val().trim();
	if (topic == "") {
		$('#message').text('Enter A New Topic')
		return false;
	} else
		topics.push(topic);
	$('#message').empty();
	makeGifBtns();
})
}

//AJAX display gifs

// reset topic array
function resetTopics(){
	$('#clearTopics').on('click', function(){
topics.pop(topic);
		makeGifBtns();
})
}

makeGifBtns();
newTopics();
resetTopics();