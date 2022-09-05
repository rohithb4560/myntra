const express = require('express')
const mongoose = require('mongoose')
const {product} = require('../index')

module.exports.createProducts=body=> {
    return product.create(body);
  }

  module.exports.findAllProducts = filterQuery=>{
    return product.find(filterQuery).lean().exec()
}