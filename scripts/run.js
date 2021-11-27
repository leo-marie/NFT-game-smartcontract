// npx hardhat run scripts/run.js

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Stan", "Cartman", "Kenny"],       // Names
      ["https://imgur.com/zLa5eta.png", // Images
      "https://imgur.com/W4Spzux.png", 
      "https://imgur.com/RVxdyW4.png"],
      [100, 200, 1],                    // HP values
      [150, 100, 1000],                       // Attack damage values
      "Pr. Chaos", // Boss name
      "https://imgur.com/U6COYDY.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1); // go get me the data inside the NFT with tokenId 1
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();