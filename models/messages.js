let messages = [
    {
      _id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      _id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

module.exports = {
    getMessages: () => messages,
    addMessage: (message) => messages.push(message),
    findMessage: (id) => messages.find(m => m._id === id)
};