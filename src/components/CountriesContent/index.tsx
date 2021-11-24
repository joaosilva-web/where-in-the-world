import {useEffect, useState} from 'react';
import { api } from '../../services/api/api';

import * as S from "./styles";
import * as Component from "../../styles/globalComponents/styles";
import { FaChevronDown, FaSearch } from "react-icons/fa";

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

    useEffect(() => {
      async function loadCountries() {
        const { data } = await api.get<InterfaceCountry[]>(`all`)
  
        if(data) {
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
    return(
        <S.CountriesContent>
            <Component.Container flexDirection="column">
                <header>
                    <S.SearchInput>
                        <label>
                            <FaSearch color="gray"/>
                            <input type="text" placeholder="Search for a Country..."/>
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

                <section>
                {
                    country.map((country) => (
                        <S.CountryCard key={country.translations.por.official} flag={country.flags.svg}>
                            <div className="flag">

                            </div>
                            <div className="cardContent">
                            <h2>{country.translations.por.common}</h2>
                            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                            <p><strong>Region: </strong> {country.region}</p>
                            <p><strong>Capital: </strong> {country.capital}</p>
                            </div>
                        </S.CountryCard>
                    ))
                }
                </section>
            </Component.Container>
        </S.CountriesContent>
    );
}