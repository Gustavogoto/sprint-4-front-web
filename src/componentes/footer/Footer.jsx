import { } from "react"
import '../footer/styles/footer.scss'

const Footer = () => <div className='Fundo'>
    <footer className="page-footer-font-small-blue-pt-4">
        <hr className="divisa"/>
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">IMSAC</h5>
                    <p className="text">In search of a better world</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://web.facebook.com/fiap/?locale=pt_BR&_rdc=1&_rdr">Facebook</a></li>
                        <li><a href="https://www.instagram.com/fiapoficial/">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2023 Copyright:
        </div>
    </footer></div>

export default Footer