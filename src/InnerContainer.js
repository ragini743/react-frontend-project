const InnerContainer = (props) =>{
    const {bioData} = props; 
    const {gender,phone,picture ,name} =bioData
    console.log("data",bioData)
   
   
return (
<div className="border-4 border-black  p-10 flex ">
<div className="border-4 border-black object-cover
w-[50%]">
<img src={picture.large}alt="img"></img>
</div>
<div className="font-bold text-lg ml-5"><p>{name.first +" " + name.last}</p>
<p> {gender}</p>
<p>{phone}</p>

</div>

</div>
)}
export default InnerContainer;