import $ from "../leaf/leaf.js";
import router from "../leaf/modes/router/router.js";
import fs from "fs";
import loadStaticAsset from "../leaf/modes/router/utils/loadStaticAsset/loadStaticAsset.js";
$.modes = {
  router: router,
};
$.mode = $.modes.router;
$({
  handler: (
    req,
    res,
  ) => {
    res.end(
      fs.readFileSync(
        "index.html",
      ),
    );
  },
  method: "get",
  routes: [
    {
      handler: loadStaticAsset,
      method: "get",
      name: "index.js",
    },
  ],
});
