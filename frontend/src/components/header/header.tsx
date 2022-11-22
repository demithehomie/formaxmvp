import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
/*
function HeaderOne() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Comprar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Vender</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Sobre
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderOne;]

style="grid-template-columns: 1fr 2fr;"
style="grid-template-columns: 1fr 2fr;"

*/

function HeaderOne(){

    return(
        <main>
  <h1 className="visually-hidden">Headers examples</h1>

 

  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap  justify-content-lg-start">
        <a href="/" className="d-flex  mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"/></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

        
</main>

    )
}
export default HeaderOne;