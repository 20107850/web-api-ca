import express from 'express';
import asyncHandler from 'express-async-handler';
import Watchlist from './watchlistModel';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const watchlist = await Watchlist.find();
    res.status(200).json(watchlist);
}));

router.get('/user/:username', asyncHandler(async (req, res) => {
    const watchlist = await Watchlist.find({ username: req.params.username });
    res.status(200).json(watchlist);
}));

export default router;