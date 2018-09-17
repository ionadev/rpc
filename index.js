
const client = require('discord-rich-presence')('473079754497458187');
 
client.updatePresence({
  state: 'Coding An Awesome Bot!',
  details: 'Coding n Coding!',
  largeImageKey: 'thrumbo',
  instance: true,
});
