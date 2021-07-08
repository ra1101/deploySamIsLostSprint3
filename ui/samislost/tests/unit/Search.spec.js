import axios from "axios";

async function search (search_term) {
    const response = await axios.get("https://samislost-json-server-sotyz.ondigitalocean.app/sightings?q="+search_term);
    //console.log(response.data);
    return response.data;
};

// -------------------------------------------------------
// testing Search 
// -------------------------------------------------------
describe('Search feature', () => {
    it('makes sure unit test runs', () => {
        expect(true).toBe(true);
    })
})

describe('Search feature', () => {
    it('searches with xyz should return no match', async () => {
        return search("xyz").then(data => {
            expect(data.length).toEqual(0);
        });
    });
})

describe('Search feature', () => {
    it('searches with empty space', async () => {
        return search(" ").then(data => {
            expect(data[0].title).toContain('Found white bird');
        });
    });
})

describe('Search feature', () => {
    it('searches with a number', async () => {
        return search("35").then(data => {
            expect(data[0].sightedLocation).toContain('35');
        });
    });
})

describe('Search feature', () => {
    it('searches with special character ?', async () => {
        return search("?").then(data => {
            expect(data.length).toEqual(0);
        });
    });
})

describe('Search feature', () => {
    it('searches with "reptile"', async () => {
        return search("reptile").then(data => {
            expect(data[0].type).toContain('reptile');
        });
    });
})

describe('Search feature', () => {
    it('searches with "Found white wolf"', async () => {
        return search("Found%20white%20wolf").then(data => {
            expect(data[0].title).toContain('Found white wolf');
        });
    });
})

describe('Search feature', () => {
    it('searches with an address', async () => {
        return search("35%20Lomasney%20Way,%20Boston,%20MA%2002114").then(data => {
            expect(data[0].sightedLocation).toContain('35 Lomasney Way, Boston, MA 02114');
        });
    });
})

describe('Search feature', () => {
    it('searches with an id', async () => {
        return search("d765f44d-e012-4892-ab32-6191186d97af").then(data => {
            expect(data[0].id).toContain('d765f44d-e012-4892-ab32-6191186d97af');
        });
    });
})

describe('Search feature', () => {
    it('searches with a date', async () => {
        return search("6/1/2021").then(data => {
            expect(data[0].sightingDate).toContain('6/1/2021');
        });
    });
})
