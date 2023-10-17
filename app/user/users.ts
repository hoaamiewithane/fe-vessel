import dayjs from 'dayjs';
export const users = Array.from(Array(100).keys()).map(i => ({
  id: i+1,
  username: `user-${i + 1}`,
  email: `boy${i + 1}balls@gmail.com`,
  firstName: `first name ${i + 1}`,
  lastName: `last name ${i + 1}`,
  bio: "Your bio the open-source SSD pixel!",
  createAt: dayjs('2023-10-16T09:41:56.817Z').format('YYYY-MM-DD HH:mm'),
  updateAt: dayjs('2023-10-16T09:41:56.817Z').format('YYYY-MM-DD HH:mm'),
  role: i % 2 === 0 ? 'Admin' : 'User',
}))