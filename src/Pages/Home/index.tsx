import React from 'react'
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/Components/ButtonIcon';
import './styles.scss'

const Home = () =>(
        <div className="home-content">
            <div className="col-6">
                    <h1 className="text-title">
                        Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
                    </h1>
                    <p className="text-subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
                        or observar as instruções passadas no capítulo sobre a elaboração <br /> deste projeto.<br />
                        Este design foi adaptado a partir de Ant Design System for Figma, de < br/> Mateusz Wierzbicki: antforfigma@gmail.com
                    </p>
                    
                    <Link to="/search">
                    <ButtonIcon text = "inicie a sua buscar"/>
                    </Link>
            </div>
        </div>
);

export default Home;