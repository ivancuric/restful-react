const baseUrl = 'https://restful-react-on-rails.herokuapp.com/';
// id is not really used
export default ({ ViewComponent, resourceName, id = null }) =>
  console.log(resourceName, id, baseUrl);
