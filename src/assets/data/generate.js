const casual = require("casual");

casual.define("position", () => {
  const positions = ["Waiter", "Chef", "Cook", "Server", "Manager", "Host"];

  return positions[casual.integer((from = 0), (to = 5))];
});

module.exports = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear().toString().slice(-2);

  const data = {
    managers: [
      {
        id: 1,
        name: "John Smith",
        bookmarkIds: [1, 3, 5],
      },
    ],
    applications: [],
  };
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    const questions = [];
    for (let j = 0; j < casual.integer((from = 1), (to = 5)); j++) {
      questions.push({
        text: `${casual.words((n = casual.integer((from = 7), (to = 15))))}?`,
        answer: `${casual.words((n = casual.integer((from = 1), (to = 5))))}.`,
      });
    }

    data.applications.push({
      id: i,
      name: `${casual.name}`,
      position: `${casual.position}`,
      applied: `${month}/${casual.day_of_month}/${year}`,
      experience: casual.integer((from = 0), (to = 10)),
      availability: {
        M: casual.integer((from = 0), (to = 12)),
        T: casual.integer((from = 0), (to = 12)),
        W: casual.integer((from = 0), (to = 12)),
        Th: casual.integer((from = 0), (to = 12)),
        F: casual.integer((from = 0), (to = 12)),
        S: casual.integer((from = 0), (to = 12)),
        Su: casual.integer((from = 0), (to = 12)),
      },
      questions,
    });
  }
  return data;
};
