export function getRandomImage() {
  const randomNumber = Math.floor(Math.random() * 70);
  const user_image = `https://picsum.photos/id/${randomNumber}/800/600`;
  return user_image;
}
