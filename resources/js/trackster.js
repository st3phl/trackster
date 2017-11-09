var Trackster = {};
const API_KEY = 'f0ad4bb16d502a38cc5c852ad6740ef5';

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var htmlTrack =
      '<div class="row track">' +
      '  <div class="col-xs-1 col-xs-offset-1 btn-play">' +
      '    <a href="https://www.youtube.com/watch?v=eI_O5_tJ1hA&feature=youtu.be">' +
      '      <i class="fa fa-play-circle-o fa-2x"></i>' +
      '    </a>' +
      '  </div>' +
      '  <div class="col-xs-4">Fairytale in the Supermarket</div>' +
      '  <div class="col-xs-2">The Raincoats</div>' +
      '  <div class="col-xs-2">The Raincoats</div>' +
      '  <div class="col-xs-2">101,839</div>' +
      '</div>';
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(response) {
      console.log('Success!');
    }
  });
};
