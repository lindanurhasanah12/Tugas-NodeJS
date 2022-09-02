function samplePromise(){
    return Promise.resolve("Linda");
}
 async function run(){
    const name = await samplePromise();
    console.info(name);
 }

 run();

