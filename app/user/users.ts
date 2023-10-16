import { randomIntFromInterval } from "../utils";

export const users = Array.from(Array(100).keys()).map(i=>({
  username:`user-${i+1}`,
  email:`boy${i+1}balls@gmail.com`,
  firstName:randomIntFromInterval(1,4)>2?`firstname ${i+1}`:null,
  lastName:randomIntFromInterval(1,4)>2?`lastName ${i+1}`:null,
  bio:"You can't compress the program without quantifying the open-source SSD pixel!",
  createAt:'2023-10-16T09:41:56.817Z',
  updateAt:'2023-10-16T09:41:56.817Z',
  priority: "medium"
}))