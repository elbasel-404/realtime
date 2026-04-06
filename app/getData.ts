"use server";

export const getData = async () => {
  const randomNum = Math.floor(Math.random() * 10);

  const prom = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Data: ${randomNum}`);
    }, 1000);
  });

  const data: string = await prom;
  return data;
};
