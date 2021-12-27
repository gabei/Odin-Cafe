import { createElement } from '../../DOM/DOM';
import Map from '../../assets/googleMap/map.html';

const Info = createElement('section', 'info');

const infoText = createElement('div', 'info__text');
Info.append(infoText);

const infoTextScheduleHeading = createElement('h3');
infoTextScheduleHeading.textContent = 'Hours of Operation';

const infoTextSchedule = createElement('ul', 'info__text--hours');
const infoTextScheduleContent = [
  'Monday: 8am - 8pm',
  'Tuesday: 8am - 8pm',
  'Wednesday: 8am - 8pm',
  'Thursday: 8am - 8pm',
  'Friday: 8am - 8pm',
  'Saturday: 8am - 8pm',
  'Sunday: Closed',
];

for (let item of infoTextScheduleContent) {
  let li = createElement('li');
  li.textContent = item;
  infoTextSchedule.append(li);
}

infoText.append(infoTextScheduleHeading, infoTextSchedule);

const infoMap = createElement('div', 'info__map');
infoMap.innerHTML = Map;

Info.append(infoMap);

export default Info;
