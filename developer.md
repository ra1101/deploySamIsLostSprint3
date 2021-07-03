Below is useful information for any developer to properly set up their environment in order to contribute to the project:


## Create a test API server
This replicates the code from https://github.com/typicode/json-server

Ensure you have npm and node installed. Install json-server using
npm install -g json-server

In the folder with the sighting.json file, run the following at the command line:
json-server --watch sighting.json --port 3004

It will be accessible at http://localhost:3004/sightings

