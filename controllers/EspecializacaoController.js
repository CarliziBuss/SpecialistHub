const Especializacao = require('../models/Especializacao');

exports.listarEspecializacoes = async (req, res) => {
  try {
    const especializacoes = await Especializacao.findAll();
    res.json(especializacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criarEspecializacao = async (req, res) => {
  try {
    const { nome, usuarioId } = req.body;
    const novaEspecializacao = await Especializacao.create({ nome, usuarioId });
    res.status(201).json(novaEspecializacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};