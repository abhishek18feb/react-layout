
import Image from "next/image";
import LogoImage from './logo.jpg'
import ProfileImage from "./profile.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <>
  
        {/* <div className="header">
    <h2>Blog Name</h2>
  </div> */}
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h2>Flask Api for Creating, Storing and Verifying Bcrypt Hash Password</h2>
              <div className="fakeimg" style={{ height: 200 }}>
              I am writing this article because during implementing and verifying the bcrypt hash password with the hash string which is stored hash inside postgresSql db was not working. After long time R&D I didn’t get the exact solution of my problem. Hence I though I will write one article to help other developer after getting the solution. In this article I have used the following pip packages...
              <Link href={"https://medium.com/@abhi-fullstackdeveloper/flask-api-for-creating-storing-and-verifying-bcrypt-hash-password-91b0cab7e113"} target="_blank" className="text-[#f0f8ff] hover:underline cursor-pointer"> Read More</Link>
              </div>
              <p>Keywords: Python, Flask, Bcrypt</p>
            </div>
            <div className="card">
              <h2>Implement GraphQL MicroServices Using Apollo/gateway</h2>
              <div className="fakeimg" style={{ height: 200 }}>
              GraphQl is an open source query language for APIs and a runtime. It is the modern way of building and writing Apis. GraphQl provides additional support to client how many fields values it requires as a response. To know more about the GraphQl please go through this link.

With the help of Apollo Server and Apollo Subgraph a developer can write the microservice very easy way. And with the help of Apollo Gateway we can merge all microservices and get the single end points which we can use at our client end...
<Link href={"https://medium.com/stackademic/implement-graphql-microservices-using-apollo-gateway-5010f1d3df37"} target="_blank" className="text-[#f0f8ff] hover:underline cursor-pointer"> Read More</Link>
              </div>
              <p>Keywords: Node.js, Apollo, Subgraph, Microservices, GraphQL</p>
            </div>
            <div className="card">
              <h2>Link to My All other Medium Article</h2>
              <div className="fakeimg" style={{ height: 60 }}>
                <Link href={"https://abhi-fullstackdeveloper.medium.com/"} target="_blank" className="text-[#f0f8ff] hover:underline cursor-pointer"> Visit this link to view all articles</Link>
              </div>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg" style={{ height: 530 }}>
                <Image
                  src={ProfileImage}
                  width={400}
                  height={400}
                  className="mx-auto"
                  alt="Picture of the author"
                />
              </div>
              <h5>Abhishek Kumar Gupta</h5>
              <Link href={"/about"}>Full stack developer...</Link>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg">
                Read Text From Image using Python, OpenCv 
                <Link href={"https://abhi-fullstackdeveloper.medium.com/read-text-from-image-using-python-opencv-and-pytesseract-3e2e3d82c534"} target="_blank" className="text-[#f0f8ff] hover:underline cursor-pointer"> Read More</Link>
              </div>
              <br />
              <div className="fakeimg">
                Flask Api for Creating, Storing and Verifying Bcrypt Hash Password
                <Link href={"https://medium.com/@abhi-fullstackdeveloper/flask-api-for-creating-storing-and-verifying-bcrypt-hash-password-91b0cab7e113"} target="_blank" className="text-[#f0f8ff] hover:underline cursor-pointer"> Read More</Link>
              </div>
              <br />
            </div>
            {/* <div className="card">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div> */}
          </div>
        </div>
      </>

    </>

  );
}
