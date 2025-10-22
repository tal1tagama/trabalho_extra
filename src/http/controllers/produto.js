import Produto from '../models/Produto.js'; 
import express from 'express';

export function listarProdutos(req, res) {
    res.json([
        { id: 1, nome: 'Produto A', preco: 100 },
        { id: 2, nome: 'Produto B', preco: 200 }
    ]);
}

export async function createProduto(req, res) {
    try {
        const produto = new Produto(req.body);
        await produto.save();
        res.status(201).json(produto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function getProdutos(req, res) {
    try {
        const produtos = await Produto.find().populate('marcaId');
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
