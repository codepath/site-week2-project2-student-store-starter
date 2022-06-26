import "./NotFound.css"
import oops from '../assets/oops.png'
export default function NotFound()
{
    return (
        <div className="not-found-wrapper">
            <div className="div-header">
                <h2 className="message">Oops! Not Found</h2>
                
                <img src={oops} className="not-found-image"></img>
            </div>
            <div className="go-home">
                <h3 className="go-home-message">Go Back Home</h3>
            </div>

        </div>
    )
}