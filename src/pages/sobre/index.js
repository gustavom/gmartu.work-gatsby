import React from "react"

import Layout from "../../components/Layout"

import { Container } from "./styles"

export default function Sobre() {
  return (
    <Layout>
      <Container>
        <h1>sobre</h1>
        <p>
          Olá, me chamo Gustavo Martusewicz e trabalho atualmente como
          desenvolvedor front-end.
        </p>
        <p>
          Tenho mais de 10 anos de experiência na área de desenvolvimento web,
          desde webdesigner, garoto do html + css , cortador de layout e outros
          nomes que se perderam no tempo.
        </p>
        <p>
          Atualmente trabalho na PUC-SP, uma das universidades mais importantes
          do Brasil. Lá trabalhamos na sustentação do portal da Universidade,
          que criamos com Drupal 8, twig, sass, gulp e na criação e manutenção
          de outros projetos que ficam sob o "guarda-chuva" da universidade.
        </p>
        <p>
          Eu criei este site pessoal para mostrar um pouco dos projetos que
          participei ao mundo e também para treinar (fiz um gerenciador de
          conteúdo com NodeJs, Express, Sequelize e Postgres, se me perguntar,
          podemos falar mais sobre isso), e essa maravilhosa lib que é o React
          JS.
        </p>
        <p>Sinta-se livre para navegar, olhar e avaliar!</p>
        <p>Obrigado!</p>
      </Container>
    </Layout>
  )
}
