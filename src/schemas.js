export const PostFeatureToggleSchema = {
    body: {
        type: "object",
        required: ["toggle"],
        properties: {
            toggle: { description: "Feature toggle name", type: "string" },
            state: { description: "Feature toggle state", type: "boolean"},
        },
    },
    response: {
        201: {
            description: "Success response",
            type: "object",
            properties: {
                success: { type: "boolean" },
                message: { type: "string" },
            },
        },
    },
};

export const PutFeatureToggleSchema = {
    body: {
        type: "object",
        required: ["toggle", "state"],
        properties: {
            toggle: { description: "Feature toggle name", type: "string" },
            state: { description: "Feature toggle state", type: "boolean"},
        },
    },
    response: {
        200: {
            description: "Success response",
            type: "object",
            properties: {
                _id: { type: "string" },
                toggle: { type: "string" },
                state: { type: "boolean" },
                __v: { type: "number" },
            }
        }
    }
}

export const GetFeatureToggleSchema = {
    query: {
        properties: {
            name: { description: "Feature toggle name", type: "string" }
        }
    },
    response: {
        200: {
            description: "The Feature toggle",
            type: 'object',
            properties: {
                toggle: { description: "Feature toggle name", type: "string" },
                state: { description: "Feature toggle state", type: "boolean"},
            }
        }
    }
}

export const GetFeatureToggleListSchema = {
    response: {
        200: {
            description: "List of all toggles",
            type: 'array',
            properties: {
                toggle: { description: "Feature toggle name", type: "string" },
                state: { description: "Feature toggle state", type: "boolean"},
            }
        }
    }
}

export const DeleteFeatureToggleSchema = {
    body: {
        type: "object",
        required: ["toggle"],
        properties: {
            toggle: { description: "Remove feature toggle ", type: "string" }
        },
    },
    response: {
        200: {
            description: "Delete status",
            type: "object",
            properties: {
              success: { type: "boolean" },
              message: { type: "string" },
            },
        },
    },
};

