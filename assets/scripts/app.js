export default ({ app }, inject) => {
  inject('hello', (message) => {
    console.log(message);
  });
}