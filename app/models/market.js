'use strict'
class Market {

  constructor(api){
    this.id = api._id;
    this.name = api.name;
    this.position = api.position;
    this.description = api.description;
    this.products = api.products;
  }
	
}