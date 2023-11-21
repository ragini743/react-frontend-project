const InnerContainer = (props) =>{
    const {bioData} = props; 
    console.log("data",bioData)
    console.log("props",props)
    const image= bioData.picture.large;
    console.log("image",image)

return (
<div className="border-4 border-black h-full p-10">
<div className="border-4 border-black w-[25%]">
<img src={image}alt="img"></img>
</div>
</div>
)}
export default InnerContainer;