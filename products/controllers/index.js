const mongoose = require('mongoose');
const express = require('express')
const {createProducts,findAllProducts} =require('../methods/index');
const { request, response } = require('express');


module.exports.createProduct=async(request,response)=>{
    const data = await createProducts({...request.body})
    response.send(data)
}

module.exports.getProducts = async (request,response)=>{
    const data = await findAllProducts({})
    response.send(data)

}
