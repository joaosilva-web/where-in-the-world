import {useEffect, useState} from 'react';
import { api } from '../../services/api/api';

import * as S from "./styles";
import * as Component from "../../styles/globalComponents/styles";
import { FaChevronDown, FaSearch } from "react-icons/fa";

import loadingGif from "../../images/loading.gif";

interface InterfaceCountry {
    name: string,
    capital: string,
    independent: boolean,
    subregion: string,
    region: string,
    population: number,
    flags: {
    svg: string,
    png: string
    },
    translations: {
    por: {
        common: string,
        official: string
    }
    }
  }



export function CountriesContent() {
    const [country, setCountry] = useState<InterfaceCountry[]>([] as InterfaceCountry[]);
    const [name, setName] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      async function loadCountries() {
        const { data } = await api.get<InterfaceCountry[]>(`all`)
  
        if(data) {
            setLoading(false);
          console.log(data);
          setCountry(data);
        }
      }
      loadCountries();
    }, [])

  async function searchByRegion(valueButton: string) {
    const { data } = await api.get<InterfaceCountry[]>(`region/${valueButton}`)
    if(data){
        setCountry(data);
    }
    }

    async function searchByName() {   
        if(name === null) {
            const { data } = await api.get<InterfaceCountry[]>(`all`)
        } else {
            const { data } = await api.get<InterfaceCountry[]>(`name/${name}`)
        if(data){
            setCountry(data);
            console.log(country);
        }
        }
        }


    return(
        <S.CountriesContent>
            <Component.Container flexDirection="column">
                <header>
                    <S.SearchInput>
                        <label>
                            <button onClick={() => searchByName()}><FaSearch color="gray"/></button>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Search for a Country..."/>
                        </label>

                        
                    </S.SearchInput>
                    <S.Select id="regions">
                        <summary>Filter by Region <FaChevronDown/></summary>
                        <ul>
                        <li><button onClick={() => searchByRegion("africa")}>Africa</button></li>
                        <li><button onClick={() => searchByRegion("america")}>America</button></li>
                        <li><button onClick={() => searchByRegion("asia")}>Asia</button></li>
                        <li><button onClick={() => searchByRegion("europe")}>Europa</button></li>
                        <li><button onClick={() => searchByRegion("oceania")}>Oceania</button></li>
                        </ul>
                    </S.Select>
                </header>

                {!loading ? 
                    <section>
                    {
                        country.map((country) => (
                            country.independent?
                            <S.CountryCard key={country.translations.por.official}>
                                <S.Flag>
                                    <img src={country.flags.svg} alt="" />
                                </S.Flag>
                                <div className="cardContent">
                                <h2>{country.translations.por.common}</h2>
                                <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                                <p><strong>Region: </strong> {country.region}</p>
                                <p><strong>Capital: </strong> {country.capital}</p>
                                </div>
                            </S.CountryCard>
                            : null
                        ))
                    }
                    </section>

                    : <img src={loadingGif} alt="" />
                }
            </Component.Container>
        </S.CountriesContent>
    );
}