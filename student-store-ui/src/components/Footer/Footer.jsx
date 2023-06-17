import "./Footer.css"
import AppleStoreSVG from "./../../../Assets/app_store.svg";
import GooglePlayStoreLogoSVG from "./../../../Assets/google_play.svg";
function ColumnLinks({links, header, isImg = false}){
    // returns a column of decoy links or images
    return (
        <div className="links-column">
            <h4 className="links-header">
                {header}
            </h4>
            <ul className="links-list">
                {links.map((linkName) => {
                    let imageName = linkName.name;
                    let imageSrc = linkName.src;
                    return (
                        isImg ? 
                        <img src={imageSrc} alt={"photo of" + imageName} className="link-row-image" />
                        :
                        <li className="link-row">
                            {linkName}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default function Footer(){
    const linksGrid = [
        ["Categories", "Clothing", "Food", "Accessories", "Tech"],
        ["Company", "About Us", "Find a Store", "Terms", "Site Map", "Careers"],
        ["Support", "Contact Us", "Money Refund", "Order Status", "Shipping Info", "Open Dispute"],
        ["Account", "Login", "Register", "Account Settings", "My Orders"],
        ["Socials", "Facebooks", "Twitter", "Linkedin", "Instagram", "Youtube"]
    ]
    const imageLinksGrid = [
        [
        { name: "Apple Store Logo", src: AppleStoreSVG },
        { name: "Google Play Store Logo", src: GooglePlayStoreLogoSVG }
        ]
    ];

    return (
        <div className="links-grid">
            {linksGrid.map((columnLinks) => {
                // map each list of links to a ColumnLinks Component
                let header = columnLinks[0]
                let links = columnLinks.slice(0, -1);
                return (
                    <ColumnLinks links={links} header={header} />
                )
            })}
            {imageLinksGrid.map((imageLinks) => {
                // map each image link to a ColumnLinks Component
                return (
                    <ColumnLinks header="Our App" isImg={true} links={imageLinks} />
                )
            })}
        </div>
    )
} 