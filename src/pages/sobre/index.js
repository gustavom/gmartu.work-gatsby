import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"

import { ColLeft, ColRight, Container } from "./styles"

export default function Sobre() {
  return (
    <Layout>
      <Container>
        <ColLeft>
          <h1>Sobre</h1>
          <p>
            Olá, sou desenvolvedor front-end, atualmente trabalho na
            universidade PUC-SP.
          </p>
          <p>
            Tenho mais de 10 anos de experiência na área, desde webdesigner,
            garoto do html + css , cortador de layout e outros nomes que se
            perderam no tempo.
          </p>
          <p>
            Atualmente, na PUC-SP, trabalhamos na sustentação do portal da
            universidade, que criamos com Drupal 8, twig, sass, gulp e na
            criação e manutenção de outros projetos que ficam sob o
            "guarda-chuva" da universidade.
          </p>
          <p>
            Eu criei este site pessoal para mostrar um pouco dos projetos que
            participei ao mundo e também para treinar (já fiz uma versão com
            gerenciador de conteúdo com NodeJs, Express, Sequelize e Postgres e
            o front-end feito com ReactJS, se me perguntar, podemos falar mais
            sobre isso), e essa atual esta feita com GatsbyJS e Markdown para os
            projetos e para talvez, um blog.
          </p>
        </ColLeft>
        <ColRight>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-martusewicz/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dev_gustavom/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:gustavo_crj@hotmail.com" target="_blank">
                Email
              </a>
            </li>
          </ul>
        </ColRight>
      </Container>
    </Layout>
  )
}
