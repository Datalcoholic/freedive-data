import { readFileSync } from 'fs';

let rawData = readFileSync('response_1661024483443.json');
let rawRecods = JSON.parse(rawData);

rawRecods[0].forEach((e) => console.log(e));
