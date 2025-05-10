//const express = require("express");
const dotenv = require("dotenv").config();
const {MongoClient} = require("mongodb")

let cachedClient = null 
const uri = process.env.MONGO_URI;

const initdb = async ()=>{
    if(cachedClient) return cachedClient;

    const client = new MongoClient(uri)
    console.log("MongoDB client initialized");

    await client.connect();
    console.log("Database handshake establishes")

    cachedClient = client;
    return client;
}

//initdb()

module.exports = {initdb}