import Buttons from "../Buttons";

function Header() {
    return (
        <div className="lg:px-28 md:px-12 sm:px-8">
            <h1 className="text-left font-medium text-2xl my-2">Master Price</h1>
            <hr />
            <div className="my-3">
                <Buttons  buttons={[{name: "Round Trip"},{name: "One Way"},{name: "Multi city"}]}/>
            </div>
            
        </div>
    );
}

export default Header;