import React, { useEffect, useState, memo } from "react"
import { Link } from "gatsby"
import {
  ProjectList,
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
  ProjectStickImage,
} from "./styles"

function ProjectListComponent({ dataReceiver }) {
  // const [projectListTitles, setProjectListTitles] = useState([])
  const [containerFadeAnimation, setContainerFadeAnimation] = useState("")
  const [projectImage, setProjectImage] = useState("")
  const [showImageSticky, setShowImageStick] = useState(false)
  // const projectElements = [
  //   ...document.querySelectorAll("#project-list article >a >div:nth-child(2)"),
  // ]
  // console.log(projectElements)

  useEffect(() => {
    // console.log(dataReceiver)
    // console.log("mount")
    // const projectElements = [
    //   ...document.querySelectorAll(
    //     "#project-list article >a >div:nth-child(2)"
    //   ),
    // ]
    // setProjectListTitles(projectElements)
  })

  function insertProjectImage(e) {
    let childrenImage = e.target.parentNode
      .querySelector("img")
      .getAttribute("src")
    // console.log(childrenImage)
    setProjectImage(childrenImage)
    setShowImageStick(true)
    // projectElements.map(item => {
    //   // console.log("eita")
    //   item.classList.remove("fade-in")
    //   item.classList.add("fade-out")
    // })
    setContainerFadeAnimation("fade-animation")
    e.target.classList.add("fade-in")
  }
  function hiddenImageSticky(e) {
    setContainerFadeAnimation("")
    setShowImageStick(false)
    e.target.classList.remove("fade-in")
    // projectElements.map(item => {
    //   item.classList.remove("fade-in")
    //   item.classList.remove("fade-out")
    // })
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
