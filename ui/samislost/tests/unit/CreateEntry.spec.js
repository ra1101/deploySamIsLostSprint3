import axios from "axios";

async function createEntry(form) {
  const response = await axios.post("https://samislost-json-server-sotyz.ondigitalocean.app/sightings", form);
  return response.status;
};

// -------------------------------------------------------
// testing create entry 
// -------------------------------------------------------
describe('create entry feature', () => {
  it('makes sure unit test runs', () => {
    expect(true).toBe(true);
  })
})

describe('create entry feature', () => {
  it('create successfully', async () => {
    var form = {};
    form.type == "dog";
    form.title == "abc";
    form.sightingDate == "x";
    form.sightingTime == "x";
    form.sightedLocation == "x";
    form.currentLocation == "x";
    form.description == "x";
    return createEntry(form).then(data => {
      expect(data).toBe(201);
    });
  });
})

describe('create entry feature', () => {
  it('create with blank', async () => {
    var form = {};
    form.type == "";
    form.title == "";
    form.sightingDate == "";
    form.sightingTime == "";
    form.sightedLocation == "";
    form.currentLocation == "";
    form.description == "";
    return createEntry(form).then(data => {
      expect(data).toBe(201);
    });
  });
})
