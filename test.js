/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
const NFTs = [] 

function mintNFT(_name,_eyecolor,_shirtType,_bling){
    const NFT={
        "name": _name,
        "eyecolor": _eyecolor,
        "shirtType": _shirtType,
        "bling": _bling,
    }
    NFTs.push(NFT);
    console.log("Minted:"+ _name);
}
    function listNFTs(){
        for(let i=0; i<listNFTs.lenght;i++){
            console.log(NFTs[i].name);
            console.log(NFTs[i].eyecolor);
            console.log(NFTs[i].shirtType);
            console.log(NFTS[i].bling);
        }
    }
    function getTotalSupply(){
        console.log(NFTs.length);
    }
     mintNFT("Neha","black","Saree","diamond ring");
     listNFTs();
     getTotalSupply();
    
