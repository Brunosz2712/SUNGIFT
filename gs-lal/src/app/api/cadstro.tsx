// CADASTRO
// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { nomeCondominio, cep, estado, cidade, bairro, complemento, email, senha } = req.body;

//         // Lógica de validação (pode ser mais extensa dependendo da necessidade)
//         if (!nomeCondominio || !cep || !estado || !cidade || !bairro || !complemento || !email || !senha) {
//             return res.status(400).json({ message: "Todos os campos são obrigatórios." });
//         }

//         // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
        

        
//         res.status(200).json({ message: "Cadastro realizado com sucesso!" });
//     } else {
//         res.status(405).json({ message: "Método não permitido." });
//     }
// }

// DOAÇÃO
// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//     } else {
//         setErrors({});

//         // Fazendo uma requisição para a API de doação
//         try {
//             const response = await fetch('/api/doacao', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData), // Usando os dados do formulário
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 // Caso a doação seja bem-sucedida
//                 setSuccessMessage(result.message);
//                 setTimeout(() => {
//                     router.push("/agradecimento"); // Redireciona para uma página de agradecimento
//                 }, 3000);
//             } else {
//                 // Caso ocorra algum erro
//                 setErrors({ apiError: result.message });
//             }
//         } catch (error) {
//             setErrors({ apiError: "Ocorreu um erro ao tentar processar a doação. Tente novamente." });
//         }
//     }
// };
