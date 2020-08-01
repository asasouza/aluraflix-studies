// React
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Components
import ButtonLink from '../../../components/ButtonLink';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
// Hooks
import useForm from '../../../hooks/useForm';
// Repositories
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
  const initialValues = {
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=jjZSSsrZDFY',
    categoria: 'Front End',
  };

  const history = useHistory();
  const { onChange, values } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  const categoriesSuggestions = categories.map((categoria) => categoria.titulo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((catergoriesData) => {
        setCategories(catergoriesData);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoria = categories.find((categoria) => categoria.titulo === values.categoria);

    const isValid = categoria && values.titulo && values.url;

    if (!isValid) {
      // eslint-disable-next-line no-alert
      return alert('Preencha o formulário corretamente');
    }

    videosRepository.create({
      categoriaId: categoria.id,
      titulo: values.titulo,
      url: values.url,
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do Vídeo:"
          name="titulo"
          onChange={onChange}
          type="text"
          value={values.titulo}
        />

        <FormField
          label="URL:"
          name="url"
          onChange={onChange}
          type="text"
          value={values.url}
        />

        <FormField
          label="Categoria:"
          name="categoria"
          onChange={onChange}
          type="text"
          value={values.categoria}
          suggestions={categoriesSuggestions}
        />

        <ButtonLink as="button" style={{ background: 'var(--black)' }}>Cadastrar</ButtonLink>
      </form>

      <Link to="/cadastro/categoria" style={{ display: 'block', margin: '20px 0' }}>Cadastrar categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
