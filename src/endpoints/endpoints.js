export const api = {
  //register
  register: {
    method: "post",
    url: '/sign-up'
  },
  signIn: {
    method: "post",
    url: '/sign-in'
  },
  signOut: {
    method: "post",
    url: '/sign-out'
  },
  //place
  place: {
    method: 'get',
    url: '/place/:id'
  },
  placeReserve: {
    method: 'get',
    url: '/place/:id/reserve'
  },
  addPlace: {
    method: 'post',
    url: '/place/add'
  },
  allPlaces: {
    method: 'get',
    url: '/place/all'
  },
  updatePlace: {
    method: 'post',
    url: '/place/update/:placeId'
  },
  //profile
  profile: {
    method: 'get',
    url: '/profile'
  },
  guestProfile: {
    method: 'get',
    url: '/profile/:id'
  },
  placesProfile: {
    method: 'get',
    url: '/profile/add-event'
  },
  //event
  event: {
    method: 'get',
    url: '/event/:id'
  },
  getEvents: {
    method: 'get',
    url: '/event/all'
  },
  addEvent: {
    method: 'post',
    url: '/event/add'
  },
  updateEvent: {
    method: 'patch',
    url: '/event/update/:eventId'
  },
  //comments
  addComment: {
    method: 'post',
    url: '/comment/add'
  },
  removeComment: {
    method: 'post',
    url: '/comment/romeve/:commentId'
  }
}