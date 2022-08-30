import { readFileSync } from 'fs';

let rawData = readFileSync('response_1661024483443.json');
let rawRecods = JSON.parse(rawData);

let cleanRecords = rawRecods[0].map((e) => {
	const regex = /\(([^()]*)\)/;
	const { Date, Depth_m, Discipline, Distance_m, Gender, Name, Place, Time } =
		e;
	return {
		date: Date,
		depth_m: +Depth_m,
		discipline: Discipline,
		disciplineShort: Discipline.match(regex)[0],
		distance_m: +Distance_m,
		gender: Gender,
		name: Name,
		place: Place,
		time: +Time,
	};
});

console.log(cleanRecords);
