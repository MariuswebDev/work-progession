function greet(name: string): string {
  return `Hello ${name}`;
}

const result = greet("mia");
console.log(result);

type Status = "active" | "inactive" | "pending";
const state: Status = "active";
console.log(state);
