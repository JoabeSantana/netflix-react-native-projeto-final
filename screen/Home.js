import React, { useState, useEffect } from 'react';

import { StatusBar, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { ProfileContext } from '../ProfileContext';
import { getLocation, filterByCountry } from './services/movieFilter';
import { useSpring, animated } from 'react-spring';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const AnimatedPoster = animated(Poster);

const Home = () => {
  const propsAnimatedPoster = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    },
    config: { duration: 5000 }
  });
  const [movies, setMovies] = useState([]);
  const [nationalMovies, setNationalMovies] = useState([]);

  useEffect(() => {
    const loadingMovies = async () => {
      const moviesJson = require('../assets/Movies.json');
      const position = await getLocation();
      const nationalCountries = await filterByCountry(moviesJson, position);
      setNationalMovies(nationalCountries);

      const nationalCountriesTitles = nationalCountries.map(
        (item, index) => item.Title,
      );
      //console.log(nationalCountriesTitles);
      const moviesWithoutNationals = moviesJson.filter((item, index) => {
        return !nationalCountriesTitles.includes(item.Title);
      });

      setMovies(moviesWithoutNationals);
    };
    loadingMovies();
  }, [movies]);

  return (
    <ProfileContext.Consumer>
      {(value) => (
        <>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Container>
            <AnimatedPoster style={propsAnimatedPoster} source={require('../assets/poster.jpg')}>
              <Gradient
                locations={[0, 0.2, 0.6, 0.93]}
                colors={[
                  'rgba(0,0,0,0.5)',
                  'rgba(0,0,0,0.0)',
                  'rgba(0,0,0,0.0)',
                  'rgba(0,0,0,1)',
                ]}>
                <Header />
                <Hero />
              </Gradient>
            </AnimatedPoster>
            <Movies label="Recomendados" data={movies} />
            <Movies label="Nacionais" data={nationalMovies} />
          </Container>
        </>
      )}
    </ProfileContext.Consumer>
  );
};

export default Home;
