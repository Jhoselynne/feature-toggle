import { Schema,model } from "mongoose";

const ToggleSchema = new Schema ({
    toggle: {type: String, require: true},
    state: {type: Boolean, require: true}
});

const Toggle = model("Toggle", ToggleSchema);

export default Toggle;