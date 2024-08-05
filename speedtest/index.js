const pupter = require('puppeteer-core');
async function run() {
  const browser = await pupter.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',//执行路径，根据自己电脑的安装路径修改
    headless: false,//无头模式
    defaultViewport: null,//默认视窗大小

  })
  const page = await browser.newPage();//打开浏览器页面
  const startTime = performance.now();//记录开始时间
  await page.goto('http://127.0.0.1:8080/'); //打开网页
  await page.waitForSelector('.panel-test');//等待页面加载完成
  console.log(performance.now() - startTime);//打印时间差

  // let timing = JSON.parse(await page.evaluate(() => { return JSON.stringify(window.performance.timing) }));//获取页面加载时间 
  // console.log(timing);//打印页面加载时间
  // console.log(performance.now() - startTime);//打印时间差

}

run();