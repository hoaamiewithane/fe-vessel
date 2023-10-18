const listLabel=['domestic' ,'international']
const listOwner=['boy2balls@gmail.com', 'boy3balls@gmail.com' ,'boy4balls@gmail.com','boy5balls@gmail.com','boy14balls@gmail.com','boy124balls@gmail.com']

export const vessels = Array.from(Array(100).keys()).map(i => ({
  id: i+1,
  vesselName: `vessel-${i + 1}`,
  title: `Backing up the pixel won't do anything ${i + 1}`,
  packageWeight: 1000+i,
  label: listLabel[i%2],
  owner:listOwner
}))