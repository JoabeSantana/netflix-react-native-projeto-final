import React, { useState, useEffect } from 'react';

import { StatusBar, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { ProfileContext } from './context/ProfileContext';
import { getLocation, filterByCountry } from './services/movieFilter';
import { useSpring, animated } from 'react-spring';
import { translate } from '../languages/utils';

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
  const [position, setPosition] = useState(null);

  useEffect(() => {

    const obtlocation = async () => {
      try {
        const result = await getLocation();
        setPosition(result);
      } catch (error) {
        console.log('Location Error');
      }
    }
    obtlocation();
  }, []);

  useEffect(() => {
    const loadingMovies = async () => {
      const moviesJson = require('../assets/Movies.json');
      const nationalCountries = [];

      try {
        if (position !== null) {
          const nationalCountries = await filterByCountry(moviesJson, position);
          setNationalMovies(nationalCountries);
        }
      } catch (error) {
        console.log(error);
      }

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
  }, [position]);

  getResumeMovie = (user) => {
    const moviesJson = require('../assets/moviesToResume.json');
    return moviesJson[user];
  };

  return (
    <ProfileContext.Consumer>
      {({ user }) => (
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
            <Movies label={translate("Recomended")} data={movies} />
            {nationalMovies && nationalMovies.length > 0 && (
              <Movies label={translate("Nationals")} data={nationalMovies} />
            )}
            {user && (
              <Movies label={translate("Keep watching as") + " " + user} data={getResumeMovie(user)} />
            )}
          </Container>
        </>
      )}
    </ProfileContext.Consumer>
  );
};

export default Home;
