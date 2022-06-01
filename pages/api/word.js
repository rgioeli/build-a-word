export default async function handler(req, res) {
  if (!req.body.guess)
    return res.status(400).json({ error: "Guess can't be blank." });
  let guess = req.body.guess.length;

  if (guess < 3)
    return res
      .status(400)
      .json({ error: "Guess needs to be at least 3 letters." });

  switch (guess) {
    case 3:
      guess = "three";
      break;
    case 4:
      guess = "four";
      break;
    case 5:
      guess = "five";
      break;
    case 6:
      guess = "master";
      break;
  }

  const data = {
    id: 1,
    master: ["adapts"],
    five: ["pasta", "adapt"],
    four: ["spat", "taps", "tats", "pads", "past", "pats", "data"],
    three: [
      "spa",
      "tap",
      "tad",
      "sat",
      "sap",
      "sad",
      "pad",
      "pat",
      "asp",
      "ads",
    ],
  };

  if (data[guess].length == 0)
    return res.status(400).json({ error: "No words match the given word." });

  const match = data[guess].filter((word) => word === req.body.guess);
  if (match.length == 0) {
    return res.status(400).json({ error: "No words match the given word." });
  }

  res.status(200).json({ success: match[0] });
}
