import HogTile from "./HogTile";

const Hogs = ({hogList}) => {
 
    const mappedHogs = hogList.map(hog => <HogTile key={hog.name} hogObj={hog} />)

    return (
            <>{ mappedHogs }</>
    )
}


export default Hogs;