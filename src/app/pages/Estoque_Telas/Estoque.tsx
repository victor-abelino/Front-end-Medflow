import React, { useState } from 'react';
import { TextField, Button, Grid2,Box, Typography,RadioGroup,Radio,FormControlLabel, FormLabel, FormControl, Snackbar, Alert } from '@mui/material';

export const Estoque = () => {
 
  const [formData, setFormData] = useState({
    nome: '',
    id:'',
    unidade_medida: '',
    valor: '',
    fornecedor: '',
    data_pedido: 'date',
    Validade: '',
    Embalagem: '',
    Perecivel: '',
    Tipo: ''
  });

  //constante que faz a notficação de cadastro
  const [openSnaeckbar, setOpenSnackbar] = useState
  (false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
   
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Registra Produto
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={5}>
        <Grid2 size={12}>
            <TextField
              label="ID"
              variant="outlined"
              fullWidth
              type='string'
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              type='string'
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={13}>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid2>
          <Grid2 size={13}>
            <TextField
              label="Fornecedor"
              variant="outlined"
              fullWidth
              type='string'
              name="fornecedor"
              value={formData.fornecedor}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={13}>
            <TextField
              label="Data Pedido"
              variant="outlined"
              fullWidth
              type='date'
              name="data_pedido"
              value={formData.data_pedido}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid2>
          <Grid2 size={13}>
            <TextField
              label="Validade"
              variant="outlined"
              fullWidth
              type='date'
              name="Validade"
              value={formData.Validade}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />            
          </Grid2>

          <Grid2 size={13}>
            <TextField
              label="Embalagem"
              variant="outlined"
              fullWidth
              type='string'
              name="Embalagem"
              value={formData.Embalagem}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 size={12}>
            <TextField
            label="Tamanho"
            variant='outlined'
            fullWidth
            name='unidade de médida'
            defaultValue={formData.unidade_medida}
            onChange={handleChange}/>
            </Grid2>

            <Grid2 size={13}>
  <FormControl component="fieldset">
    <FormLabel component="legend">Temperatura</FormLabel>
    <RadioGroup
      sx={{ gap: 1 }}
      row
      name="Tipo"
      value={formData.Tipo}
      onChange={handleChange}
    >
      <FormControlLabel value="Perecível" control={<Radio />} label="Perecível" />
      <FormControlLabel value="Resfriado" control={<Radio />} label="Resfriado" />
      <FormControlLabel value="Termossensível" control={<Radio />} label="Termossensível" />
    </RadioGroup>
  </FormControl>
</Grid2>

          <Grid2 size={13}>
            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};







