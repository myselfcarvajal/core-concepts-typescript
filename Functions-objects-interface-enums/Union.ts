let score: number | string = 33
score = 44
score = "55"


type Users = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let Willy: User | Admin = { name: "Willy", id: 322, username: "willy" }

Willy = { username: "willy", id: 322 }

// function getDbId(id: number | string) {
//   console.log(id)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
}

const data: number[] = [1, 2, 3, 4]
const data_: string[] = ["1", "2", "3", "4", "5"]
const data__: (string | number | boolean)[] = [1, "4", "5", true]

export { }
