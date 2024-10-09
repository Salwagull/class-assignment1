import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style");

const About = () => {
  return (
    <div>
        <h1 className={cssStyle.gray}>This is About Page</h1>
    </div>
  )
}

export default About;