"use server";

export const getData = async (index: number) => {
  const randomNum = Math.floor(Math.random() * 10);

  return `index: ${index}, random number: ${randomNum}`;
  //   const prom = new Promise<string>((resolve) => {
  //     setTimeout(() => {
  //       resolve(`index: ${index}, random number: ${randomNum}`);
  //     }, 1000);
  //   });

  //   const data: string = await prom;
  //   return data;
};
