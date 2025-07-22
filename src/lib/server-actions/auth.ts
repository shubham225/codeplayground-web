"use server";

export async function login(username: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const result = await dummyCredentialLogin(username, password);

  return result;
}

async function dummyCredentialLogin(username: string, password: string) {
  const user = {
    id: "1236432793",
    name: "Shubham Shinde",
    email: "shubhamshinde225@gmail.com",
    role: "user",
    login: "@shubhamshinde225",
    password: "qwerty123", 
    image: "https://pbs.twimg.com/profile_images/874661809139073025/X8yzIhNy_400x400.jpg"
  };

  if (username === user.email && password === user.password) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}
