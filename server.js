import $ from "../../../leaf.js";
import router from "../router.js";
import fs from "fs";
import loadStaticAsset from "../utils/loadStaticAsset/loadStaticAsset.js";
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
