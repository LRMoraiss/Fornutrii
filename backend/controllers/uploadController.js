const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const uploadDir = path.join(__dirname, '../../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

exports.uploadFoto = async (req, res) => {
  try {
    if (!req.files || !req.files.foto) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    const foto = req.files.foto;
    const extensao = path.extname(foto.name);
    const nomeArquivo = `${uuidv4()}${extensao}`;
    const caminhoArquivo = path.join(uploadDir, nomeArquivo);

    await foto.mv(caminhoArquivo);

    res.json({ 
      url: `/uploads/${nomeArquivo}`,
      mensagem: 'Upload realizado com sucesso'
    });
  } catch (error) {
    console.error('Erro no upload:', error);
    res.status(500).json({ error: 'Erro ao processar upload' });
  }
};