import * as schemas from "./schemas.js";
import * as controllers from "./controllers.js";

async function FeatureToggleRoutes(server, option) {

    server.route({
        method: "POST",
        url: "/toggle",
        schema: schemas.PostFeatureToggleSchema,
        handler: controllers.PostFeatureToggleController
    });

    server.route({
        method: "PUT",
        url: "/toggle",
        schema: schemas.PutFeatureToggleSchema,
        handler: controllers.PutFeatureToggleController
    });

    server.route({
        method: "GET",
        url: "/toggle",
        schema: schemas.GetFeatureToggleSchema,
        handler: controllers.GetFeatureToggleController
    });

    server.route({
        method: "GET",
        url: "/toggles",
        schema: schemas.GetFeatureToggleListSchema,
        handler: controllers.GetFeatureToggleListController
    });

    server.route({
        method: "DELETE",
        url: "/toggle",
        schema: schemas.DeleteFeatureToggleSchema,
        handler: controllers.DeleteFeatureToggleController
    });

}

export default FeatureToggleRoutes;