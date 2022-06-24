import "./NotFound.css"

export default function NotFound(props) {
    return (
    <div className="content">
        <h1>Not Found</h1>
        <h2>{props.productId}</h2>
        <h3>{props.error}</h3>
    </div>)
}