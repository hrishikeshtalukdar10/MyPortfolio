function Hero() {
    return (
      <section
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Hrishikesh Talukdar
        </h1>
  
        <h3>
          System Engineer | DevOps Engineer
        </h3>
  
        <p>
          Building scalable applications and cloud infrastructure.
        </p>
  
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px"
          }}
        >
          {/* <button>
            View Projects
          </button> */}
  
          {/* <button>
            Contact Me
          </button> */}
        </div>
      </section>
    );
  }
  
  export default Hero;