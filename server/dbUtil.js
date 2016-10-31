// naive json file database implementation


// OOP is implemented without using classes. Used object prototype inheritance and instatiating based on Object.assign. Approach is inpired by Eric Elliot https://youtu.be/lKCCZTUx0sI?t=14m54s, also I've experimented there  https://github.com/AlexYegupov/test-js-classes.


// TODO: implement working with json file

//
let UserProto = {
  // TODO: validate available data fields   _fields: ['login', 'slug', 'pwd']

  _data: {},

  // update user data except password
  update(newData) {

    delete newData.pwd
    return Object.assign(this._data, newData)
  },

  setPwd(old, new_) {
    if (old === this._data.old) return false

    this._data.pwd = new_
    return true
  },

  // user data without pwd
  dataSafe() {
    return Object.assign({}, this._data, {pwd: undefined})
  }

}


  // TODO: read Users json
let Users = {
  _items: [],

  create(data) {
    let newUser = Object.assign({}, UserProto, {_data: data})
    let i = this._items.push(newUser)
    return this._items[i - 1]
  },

  refresh() {
    console.warn('TODO: load all users from json')

    this.create({login: 'user1', pwd: '1', slug: 'user1'})
    this.create({login: 'user2', pwd: '1', slug: 'user2'})
    this.create({login: 'user3', pwd: '1', slug: 'user3'})
  },

  save() {
    console.warn('TODO: save _data to json')
  },

  allDataSafe() {
    return this._items.map( (item) => item.dataSafe()  )
  },

  bySlug(slug) {
    return this._items.find( (item) => (item._data.slug === slug ))
  },

  deleteBySlug(slug) {
    const i = this._items.findIndex( (item) => item._data.slug === slug )
    if (i === -1) {
      return false
    }
    this._items.splice(i, 1)
    return true
  }
}

// here?
Users.refresh()

export { Users }

