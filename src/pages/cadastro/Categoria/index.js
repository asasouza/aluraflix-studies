// React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import ButtonLink from '../../../components/ButtonLink';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria(valoresIniciais);
  };

  const onChange = (event) => {
    setCategoria({
      ...categoria,
      [event.target.getAttribute('name')]: event.target.value,
    });
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (res) => {
      const data = await res.json();
      setCategorias([...data]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria:"
          name="nome"
          onChange={onChange}
          type="text"
          value={categoria.nome}
        />

        <FormField
          label="Descrição:"
          name="descricao"
          onChange={onChange}
          type="textarea"
          value={categoria.descricao}
        />

        <FormField
          label="Cor:"
          name="cor"
          onChange={onChange}
          type="color"
          value={categoria.cor}
        />

        <ButtonLink as="button">Cadastrar</ButtonLink>
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
