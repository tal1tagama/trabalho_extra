import Marca from '../models/marca.js';
import express from 'express';

const router = express.Router();

export async function listarMarca(req, res) {
  try {
    const marcas = await Marca.find();
    res.json(marcas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function criarMarca(req, res) {
  try {
    const marca = new Marca(req.body);
    await marca.save();
    res.status(201).json(marca);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default router;
