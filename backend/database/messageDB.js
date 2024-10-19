// import mongoose from 'mongoose';
// const messageSchema = new mongoose.Schema({
//     room_name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     messages: [{
//         sender_id: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//             required: true
//         },
//         message: {
//             type: String,
//             required: true
//         },
//         timestamp: {
//             type: Date,
//             default: Date.now
//         }
//     }]
// });

// const Message = mongoose.model('Message', messageSchema);

// export {Message};


import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  chatId: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Message = mongoose.model('Message', messageSchema);
