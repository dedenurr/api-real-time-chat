const Conversation = require('../model/Conversation');
const router = require('express').Router();

// new conversation
router.post('/', async (req, res, next) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conversation of a user

module.exports = router;