import express from 'express';
import asyncHandler from 'express-async-handler';
import Watchlist from './watchlistModel';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const watchlist = await Watchlist.find();
    res.status(200).json(watchlist);
}));

router.post('/', asyncHandler(async (req, res) => {
    const watchlistItem = await Watchlist.create(req.body);
    res.status(201).json(watchlistItem);
}));

export default router;