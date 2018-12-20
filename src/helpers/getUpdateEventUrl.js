export default url => { 
  const parsedUrl = url.split('/');

  return `/all-events/${parsedUrl[parsedUrl.length-1]}/update`
}