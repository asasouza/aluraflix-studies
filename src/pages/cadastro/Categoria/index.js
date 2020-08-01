// React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import ButtonLink from '../../../components/ButtonLink';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
// Hooks
import useForm from '../../../hooks/useForm';
// Repositories
import categoriaRepository from '../../../repositories/categorias';

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
    setCategorias([...categorias, values]);
    clearForm();
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

      <ul>
        {categorias.map(({ id, titulo }) => <li key={id}>{titulo}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
