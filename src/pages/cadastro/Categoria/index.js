// React
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Components
import ButtonLink from '../../../components/ButtonLink';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
// Hooks
import useForm from '../../../hooks/useForm';
// Repositories
import categoriaRepository from '../../../repositories/categorias';

const Table = styled.table`
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
  th {
    text-align: center,
  }
  td, th {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #333;
  }
  div {
    border: 2px solid #FFF;
    border-radius: 8px;
    display: block;
    height: 15px;
    margin: auto;
    width: 15px;
  }
`;

const CadastroCategoria = () => {
  const initialValues = {
    id: Date.now().toString(),
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const { clearForm, onChange, values } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.titulo && values.descricao) {
      return categoriaRepository.create(values)
        .then((res) => {
          setCategorias([...categorias, res]);
          clearForm();
        });
    }
    // eslint-disable-next-line no-alert
    return alert('Você precisa preencher todos os campos do formulário');
  };

  const deleteCategoria = (id) => {
    categoriaRepository.remove(id)
      .then(() => {
        const newCategorias = categorias.filter((categoria) => categoria.id !== id);
        setCategorias([...newCategorias]);
      }).catch(() =>
        // eslint-disable-next-line no-alert
        alert('Nao foi possivel deletar a categoria'));
  };

  useEffect(() => {
    categoriaRepository.getAll().then((data) => {
      setCategorias([...data]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria:"
          name="titulo"
          onChange={onChange}
          type="text"
          value={values.titulo}
        />

        <FormField
          label="Descrição:"
          name="descricao"
          onChange={onChange}
          type="textarea"
          value={values.descricao}
        />

        <FormField
          label="Cor:"
          name="cor"
          onChange={onChange}
          type="color"
          value={values.cor}
        />

        <ButtonLink as="button" style={{ background: 'var(--black)' }}>Cadastrar</ButtonLink>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      { categorias.length > 0
  && (
  <Table>
    <thead>
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Cor</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {categorias.map((categoria) => (
        <tr key={categoria.id}>
          <td>{categoria.titulo}</td>
          <td>{categoria.descricao}</td>
          <td><div style={{ backgroundColor: categoria.cor }} /></td>
          <td style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => deleteCategoria(categoria.id)}
            >
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  )}

    </PageDefault>
  );
};

export default CadastroCategoria;
