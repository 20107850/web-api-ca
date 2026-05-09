import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
    movieId: { type: Number, required: true },
    title: { type: String, required: true },
    username: { type: String, required: true },
    added_at: Date
});

export default mongoose.model('Watchlist', WatchlistSchema);