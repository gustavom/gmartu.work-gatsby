import React, { useState, memo } from "react"
import { Link } from "gatsby"
import {
  ProjectList,
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
  ProjectStickImage,
} from "./styles"

function ProjectListComponent({ dataReceiver }) {
  const [containerFadeAnimation, setContainerFadeAnimation] = useState("")
  const [projectImage, setProjectImage] = useState("")
  const [showImageSticky, setShowImageStick] = useState(false)

  function insertProjectImage(e) {
    let childrenImage = e.target.parentNode
      .querySelector("img")
      .getAttribute("src")
    setProjectImage(childrenImage)
    setShowImageStick(true)

    setContainerFadeAnimation("fade-animation")
    e.target.classList.add("fade-in")
  }
  function hiddenImageSticky(e) {
    setContainerFadeAnimation("")
    setShowImageStick(false)
    e.target.classList.remove("fade-in")
  }

  return (
    <ProjectList id="project-list" className={containerFadeAnimation}>
      {dataReceiver
        ? dataReceiver.map((item, index, array) => (
            <ProjectItem key={item.node.fields.slug}>
              {console.log({ array })}
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
        <img src={projectImage} alt="stick" />
      </ProjectStickImage>
    </ProjectList>
  )
}

export default memo(ProjectListComponent)
