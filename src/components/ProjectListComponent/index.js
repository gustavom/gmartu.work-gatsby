import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  ProjectList,
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
  ProjectStickImage,
} from "./styles"

function ProjectListComponent({ dataReceiver }) {
  const [projectListTitles, setProjectListTitles] = useState([])
  const [projectImage, setProjectImage] = useState("")
  const [showImageSticky, setShowImageStick] = useState(false)

  useEffect(() => {
    const projectElements = [
      ...document.querySelectorAll(
        "#project-list article >a >div:nth-child(2)"
      ),
    ]
    setProjectListTitles(projectElements)
  })

  function insertProjectImage(e) {
    let childrenImage = e.target.parentNode
      .querySelector("img")
      .getAttribute("src")
    console.log(childrenImage)
    setProjectImage(childrenImage)
    setShowImageStick(true)
    projectListTitles.map(item => {
      item.classList.remove("fade-in")
      item.classList.add("fade-out")
    })
    e.target.classList.add("fade-in")
  }
  function hiddenImageSticky(e) {
    setShowImageStick(false)
    projectListTitles.map(item => {
      item.classList.remove("fade-in")
      item.classList.remove("fade-out")
    })
  }

  return (
    <ProjectList id="project-list">
      {dataReceiver
        ? dataReceiver.map(item => (
            <ProjectItem key={item.node.fields.slug}>
              <Link to={item.node.fields.slug}>
                <ProjectItemImage>
                  <img
                    src={item.node.frontmatter.image}
                    alt={item.node.frontmatter.title.toLowerCase()}
                  />
                </ProjectItemImage>
                <ProjectItemTitle
                  onMouseOver={insertProjectImage}
                  onMouseLeave={hiddenImageSticky}
                >
                  {item.node.frontmatter.title.toLowerCase()}
                </ProjectItemTitle>
              </Link>
            </ProjectItem>
          ))
        : "nada"}
      <ProjectStickImage
        data-scroll
        data-scroll-sticky
        data-scroll-target="#project-list"
        data-scroll-speed="3"
        className={showImageSticky ? "active" : ""}
      >
        <img src={projectImage} />
      </ProjectStickImage>
    </ProjectList>
  )
}

export default ProjectListComponent
