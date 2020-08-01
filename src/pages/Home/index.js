// React
import React, { useEffect, useState } from 'react';
// Components
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
// Repositories
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [categoriesWithVideos, setCategories] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriesWithVideosData) => {
        setCategories(categoriesWithVideosData);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categoriesWithVideos.length === 0 && (<div>Loading...</div>)}

      { categoriesWithVideos.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={category.videos[0].titulo}
                url={category.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />
              <Carousel
                ignoreFirstVideo
                category={category}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
