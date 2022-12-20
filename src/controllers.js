export async function PostFeatureToggleController(request, response) {
  request.body.state = request.body.state ? true : false;

  try {
    const { Toggle } = request.db.models;

    const existsToggle = await Toggle.findOne({ toggle: request.body.toggle });

    //Returnera om det finns en toggel med samma namn
    if (existsToggle) {
      response.status(409);
      return "Toggle already exists!";
    }

    const newToggle = await Toggle.create(request.body);

    response.status(201);
    return {
      success: true,
      message: `Feature toggle ${newToggle.toggle}, created with state ${newToggle.state}!`,
    };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function PutFeatureToggleController(request, response) {
  try {
    const { Toggle } = request.db.models;


    // **** Lägg till så att man kan söka antingen med toggle namnet eller med id'et ****
    const updatedToggle = await Toggle.findOneAndUpdate({toggle: request.body.toggle /*|| request.body._id */}, {
        toggle: request.body.toggle,
        state: request.body.state,
      }, ({new: true}))

      if (!updatedToggle) {
        return await response.status(404).send("Toggle not found!");
      }

      console.log(updatedToggle);

    //Raden under ändrar på index 0
    //const updateToggle = await Toggle.updateOne({ toggle: request.body.toggle, state: request.body.state})

    return await response.status(200).send(updatedToggle); //{ success: true, message: `Feature toggle updated!` };
  } catch (error) {
    request.log.error(error);
    await response.status(500);
  }
}

export async function GetFeatureToggleController(request, response) {
  try {
    //request.log.info("*************" + Object.keys(request) + "##########" + typeof(request.query) + "%%%%%%%%%%%" + request.query)
    //return "TEST"
    const { Toggle } = request.db.models;

    // ******* Hur hämtar jag en toggle med dennes namn? KLAR!! *********
    const oneToggle = await Toggle.findOne({ toggle: request.query.name });

    if (oneToggle === null) {
      return await response.status(404).send("Toggle not found!");
    }

    return oneToggle;
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function GetFeatureToggleListController(request, response) {
  try {
    const { Toggle } = request.db.models;

    const toggles = await Toggle.find({});

    // *** Return är hårdkodad ***
    //return [{ toggle: "MyHelloWorld", state: true }, { toggle: "SecondHelloWorld", state: false }]

    return toggles;
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function DeleteFeatureToggleController(request, response) {
  try {
    const { Toggle } = request.db.models;

    const { deletedCount } = await Toggle.deleteOne({
      toggle: request.body.toggle,
    });

    if (deletedCount === 0) {
      response.code(404);
      return { success: false, message: "Toggle could not be found!" };
    }

    return { success: true, message: "Feature Toggle has been deleted!" };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}
