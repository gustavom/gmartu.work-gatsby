import React from "react"

import Layout from "../../components/Layout"

import { Container } from "./styles"

export default function Sobre() {
  return (
    <Layout>
      <Container>
        <h1>Sobre</h1>
        <p>
          Olá, sou desenvolvedor front-end, atualmente trabalho na PUC-SP, uma
          das universidades mais importantes do Brasil.
        </p>
        <p>
          Tenho mais de 10 anos de experiência na área, desde webdesigner,
          garoto do html + css , cortador de layout e outros nomes que se
          perderam no tempo.
        </p>
        <p>
          Atualmente trabalho na PUC-SP, uma das universidades mais importantes
          do Brasil. Lá trabalhamos na sustentação do portal da Universidade,
          que criamos com Drupal 8, twig, sass, gulp e na criação e manutenção
          de outros projetos que ficam sob o "guarda-chuva" da universidade.
        </p>
        <p>
          Eu criei este site pessoal para mostrar um pouco dos projetos que
          participei ao mundo e também para treinar (já fiz uma versão com
          gerenciador de conteúdo com NodeJs, Express, Sequelize e Postgres e o
          front-end feito com ReactJS, se me perguntar, podemos falar mais sobre
          isso), e essa atual esta feita com GatsbyJS e Markdown para os
          projetos e para talvez, um blog.
        </p>
      </Container>
    </Layout>
  )
}
