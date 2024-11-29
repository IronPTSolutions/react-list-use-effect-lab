import {  fakerES as faker } from '@faker-js/faker';
import fs from 'fs';

const users = [];
for (let i = 0; i <= 50; i++) {
  const gender = faker.person.sexType();
  const firstName = faker.person.firstName(gender);
  const lastName = faker.person.lastName();

  users.push({
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName}).toLowerCase(),
    phoneNumber: faker.phone.number({ style: 'international' }),
    gender,
    birthday: faker.date.birthdate(),
    avatar: faker.image.avatar(),
    job: {
      title: faker.person.jobTitle(),
      area: faker.person.jobArea(),
    },
    zodiacSign: faker.person.zodiacSign(),
    bio: faker.person.bio(),
    topics: [faker.book.genre(), faker.book.genre(), faker.book.genre()],
    series: [faker.book.series(), faker.book.series(), faker.book.series()]
  })
}

fs.writeFileSync('./src/data/users.json', JSON.stringify(users, null, 2), 'utf-8');
