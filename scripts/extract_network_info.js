const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const dir = path.join("build", "contracts");

try {
  const dirFiles = fs.readdirSync(dir);

  Promise.all(
    dirFiles.filter(fname => fname.endsWith(".json")).map(
      fname =>
        new Promise((resolve, _reject) => {
          fs.readFile(path.join(dir, fname), (err, data) => {
            if (err) throw err;
            resolve([fname.slice(0, -5), JSON.parse(data)["networks"]]);
          });
        })
    )
  ).then(nameNetworkPairs => {
    fs.writeFileSync(
      "networks.json",
      JSON.stringify(
        _.fromPairs(
          nameNetworkPairs.filter(([_name, nets]) => !_.isEmpty(nets))
        ),
        null,
        2
      )
    );
  });
} catch (err) {
  if (err.code === "ENOENT") {
    fs.writeFileSync("networks.json", "{}");
  } else {
    throw err;
  }
}
