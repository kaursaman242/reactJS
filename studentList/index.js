const root = document.getElementById("root-element")
const reactDom = ReactDOM.createRoot(root)

const Students = (props) => {
    const name=props.name
    const rollNo=props.rollNo
    const location=props.location

    return (
        <div style={{border:"1px solid black",margin:"2px"}}> 
            <div>
                <span>
                    Name:
                </span>
                <span>
                    {name}
                </span>
            </div>

            <div>
                <span>
                    Roll no.:
                </span>
                <span>
                 {rollNo}
                </span>
            </div>

            <div>
                <span>
                    Location:
                </span>
                <span>
                    {location}
                </span>
            </div>

        </div>
    )
}

const RootComponent=()=>{
    return(
        <div>
            <div>
                LIST OF STUDENTS
            </div>
            <Students name="Saman" rollNo={1} location="Khadoor Sahib" />
            <Students name="Gagan" rollNo={2} location="Khadoor Sahib" />
            <Students name="Muskan" rollNo={3} location="Khadoor Sahib" />
        </div>
    )
}

reactDom.render(
    <RootComponent/>

)