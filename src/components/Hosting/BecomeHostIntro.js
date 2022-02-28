import Button from "../asset/Button"
function BecomeHostIntroLeftPartVideo(){
    return(
        <div className="left-part-with-image-background">
            <img src="https://a0.muscache.com/im/pictures/f47aefea-4345-4b4d-bfbc-c28acbe9d0ae.jpg?im_w=720"
    type="video/mp4"/>
        </div>
    )
}
function  BecomeHostIntroRight(){
   return (
       <div className="r-part-with-image-background">
           <div style={{
               display:"flex",
               flexDirection: "row"
           }}>
               <div style={{
                   flexGrow: 0,
                   flexShrink: 0,
                   flexBasis: 1
               }}>
               <Button  text={"Quitter"} link={"/"} color={"gray"}></Button>
               </div>
           </div>
        <h1>Devenez hôte en 10 étapes simple</h1>
        <h3>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes</h3>
    </div>
   )
}



function BecomeHostIntro(){
    return(
        <div className="grid">
            <BecomeHostIntroLeftPartVideo/>
            <BecomeHostIntroRight/>
        </div>
    )
}

export default BecomeHostIntro ;