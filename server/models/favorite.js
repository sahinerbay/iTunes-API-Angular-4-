const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
	artistName: String,
	artworkUrl100: String,
	artistViewUrl: String,
	collectionName: String,
	collectionPrice: String,
	collectionViewUrl: String,
	previewUrl: String,
	trackName: String,
	trackId: String,
	trackPrice: String,
	trackViewUrl: String
});

const Favorite = mongoose.model('favorite', FavoriteSchema);

module.exports = Favorite;