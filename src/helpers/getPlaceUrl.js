export default url => { 
  const parsedUrl = url.split('/');

  return `/all-places/${parsedUrl[parsedUrl.length-1]}`
}