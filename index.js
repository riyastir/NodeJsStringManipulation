const prompts = require("prompts");
/** Including the class file */
let StringManipulation = require("./src/StringManipulation");
/**Get the input from user and trim the spaces from both ends */
(async () => {
  const response = await prompts({
    type: "text",
    name: "string",
    message: "Please enter the string (a-z, A-Z)",
    validate: (string) =>
      string === "" ? `At least one character is needed` : true,
  });
  try {
    const newString = new StringManipulation(response.string.trim());
    console.log(newString.result());
  } catch (err) {
    console.error(err.message);
  }
})();
