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
  useEffect(() => {
    // console.log(dataReceiver)
  })

  const [projectImage, setProjectImage] = useState("")
  const [showImageSticky, setShowImageStick] = useState(false)

  function insertProjectImage(e) {
    let childrenImage = e.target.parentNode
      .querySelector("img")
      .getAttribute("src")
    console.log(childrenImage)
    setProjectImage(childrenImage)
    setShowImageStick(true)
  }
  function hiddenImageSticky(e) {
    setShowImageStick(false)
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
