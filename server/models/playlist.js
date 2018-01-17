const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
	artistName: String,
	artworkUrl100: String,
	artistViewUrl: String,
	collectionName: String,
	collectionPrice: String,
	collectionViewUrl: String,
	previewUrl: String,
	trackName: String,
	trackId: String,
	trackName: String,
	trackPrice: String,
	trackViewUrl: String
});

const PlayList = mongoose.model('playlist', PlayListSchema);

module.exports = PlayList;