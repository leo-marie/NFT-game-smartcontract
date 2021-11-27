// npx hardhat run scripts/deploy.js --network rinkeby

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(      
      ["Stan", "Cartman", "Kenny"],       // Names
 //     ["https://imgur.com/zLa5eta.png", // Images
      ["QmNsv2H9uRju1c1bNz3PCauGV5HNK5KArdbCFb4ruRhRFp",
      "QmPtzZsRAzwHSrtbWsf6EtzYe5sc7ibAShiNTfYq8QfwyP", 
      "Qma4eaKEXNBy4RpcHbfaNVk4c5guGNQo47GXEQ2mPqKJvk"],
      [100, 200, 1],                    // HP values
      [150, 100, 1000],                       // Attack damage values
      "Pr. Chaos", // Boss name
      "https://i.kym-cdn.com/photos/images/newsfeed/001/735/264/5af.gif", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
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