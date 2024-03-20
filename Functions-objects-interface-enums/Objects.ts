const User = {
  name: "mario",
  email: "mario@gmail.com",
  isActive: true,
}

// function createUser({ name: string, isPaid: boolean }) { }

// Bad 
let newUser = { name: "carlos", isPaid: false, email: "h@gmail.com" }
// createUser(newUser)

// Object return an object
function createCourse(): { name: string, price: number } {
  return { name: "reactjs", price: 400 }
}

// type User = {
//   name: string
//   email: string
//   isActive: boolean
// }

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: false }
// }

// createUser({ name: "carlos", email: "h@gmail.com", isActive: false })

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credCardDetails?: number
}

let myUser: User = {
  _id: "42342",
  name: "carlos",
  email: "h@gmail.com",
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardnumber: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}



myUser.email = "h@h.com"
// myUser._id = "sa"
export { }