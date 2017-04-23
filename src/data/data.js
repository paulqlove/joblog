// import React from 'react';
// import Random from 'react-random';
import faker from 'faker';

var date = faker.date.recent();
      // date = JSON.stringify(date);
export default [
  {
    "id": faker.random.uuid(),
    "company": faker.company.companyName(),
    "date": date,
    "contactName": faker.name.firstName(),
    "contactEmail": faker.internet.email(),
    "networking": {
      "type": ['jobfair','meetup'],
      "eventName": faker.lorem.word,
      "date": date,
      "location": faker.address.city(),
      "notes": ' '
    },
    "applied": {
      "position": 'Front End Developer',
      "result": {
        "offer": {
          "amount": faker.random.number(),
          "turnedDown": {
            "reason": faker.random.boolean()
          },
          "date": date,
        },
        "interview": {
          "person": faker.name.firstName(),
          "type": ['phone','online','in-person'],
          "summary": ' ',
          "date": date
        },
        "denied": {
          "date": date
        }
      }
    },

  }
];
