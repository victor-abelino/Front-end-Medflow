export{}

// export const Estoque = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     id:'',
//     unidade_medida: '',
//     valor: '',
//     fornecedor: '',
//     data_pedido: '',
//     Validade: '',
//     Embalagem: '',
//     Perecivel: '',
//     Tipo: ''
//   });

//   const [openSnackbar, setOpenSnackbar] = useState(false); // estado do Snackbar

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Dados enviados:', formData);
//     setOpenSnackbar(true); // Mostra o Snackbar
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Registra Produto
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid2 container spacing={5}>
//           {/* ... todos os seus Grid2 e TextField já existentes ... */}

//           <Grid2 size={13}>
//             <Button variant="contained" color="primary" type="submit">
//               Cadastrar
//             </Button>
//           </Grid2>
//         </Grid2>
//       </form>

//       {/* Snackbar de sucesso */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//           Produto cadastrado com sucesso!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };
