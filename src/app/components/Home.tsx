import React from "react"

const Home = () => {
  return (
    <section className="text-primary-light bg-center h-screen min-h-[80rem] max-h-[120rem] relative bg-custom-bg">
      {/* // className="absolute top-[50%] left-[50%] max-w-[90rem] w-[92%] translate-center" */}
      <div className="m-auto static transform translate-x-0 translate-y-0 pt-[19rem] pb-[13rem] px-0">
        <h1 className="text-8xl uppercase text-center text-black-111 tracking-extra-widest font-extrabold">
          Hey, I&apos;m Braian Braga
        </h1>
        <div className="max-h-[80rem] mt-12 mx-auto mb-0">
          <p className="text-black-333 text-center w-full text-4xl leading-[1.6]">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="mt-20 text-center">
          <a className="btn-custom bg-[#7843E9] px-32 py-6">Projects</a>
        </div>
      </div>
    </section>
  )
}

export default Home
