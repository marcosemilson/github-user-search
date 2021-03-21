
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles.scss';

type FormData = {
  userName: string;

}

type gitUser = {
  website: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  company: string;
  created_at: string;
  blog: string;
  html_url: string;

}
const Search = () => {
  const [responseData, setResponseData] = useState<gitUser>();
  const { register, handleSubmit } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const uri = responseData?.html_url


  const onSubmit = (search: FormData) => {
    setIsLoading(true)
    axios(`https://api.github.com/users/${search.userName}`)
      .then(response => setResponseData(response.data))
      .finally(() => setIsLoading(true))
    console.log(responseData)
  }

  return (
    <>
      <form onSubmit={(handleSubmit(onSubmit))} className="search-container">
        <div className="search-content">
          <h2 className="search-title">
            Encontre um perfil Github
                </h2>
          <input
            type="text"
            name="userName"
            className="form-control input-base"
            placeholder="Usuario GitHub"
            ref={register}
          />
          <button
            type="submit"
            className="btn btn-primary border-radius-10 mr-3"
          >
            Search
                    </button>
        </div>
      </form>
      {isLoading &&
        <div className="gituser-container">
          <div className="img-container">
            <img src={responseData?.avatar_url} alt="" className="img-layout" />
            <a href={`${uri}`}
              type="button"
              id="link"
              target="blank"
              className="btn btn-primary border-radius-10 mt-3"
            >
              Ver Perfil
                </a>
          </div>
          <div>
            <div className="header-information">
              <span className="text-header-information">Repositorios Públicos: {responseData?.public_repos}</span>
              <span className="text-header-information">Seguidores: {responseData?.followers}</span>
              <span className="text-header-information">Seguindo: {responseData?.following}</span>

            </div>
            <div className="information-container">
              <h3 className="color-text">Informações</h3>
              <div className="filds-information">
                <span  >Empresa: <strong>{responseData?.company}</strong></span>
              </div>
              <div className="filds-information">
                <span>Website/Blog: <strong>{responseData?.blog}</strong></span>
              </div>
              <div className="filds-information">
                <span>Localidade: <strong>{responseData?.location}</strong></span>
              </div>
              <div className="filds-information">
                <span>Membro desde: <strong>{responseData?.created_at}</strong></span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default Search;